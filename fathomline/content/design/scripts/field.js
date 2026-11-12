// A block behaviour: the survey field. A terrain of contour lines drawn with Three.js behind the page,
// in the design's own colours. It follows the pointer (the ground swells under it), the scroll (the
// ground flows past) and the page (cue.js and rows.js say which ground to show; see lib/state.js).
//
// The block it is on is kept across pages (`persist`), so the same canvas goes on drawing while the
// site swaps the page around it, and a page change is a quick re-survey rather than a restart.
//
//   { "behavior": { "module": "field", "when": "loaded", "props": { "lines": 5, "speed": 1 } }, "persist": "field" }
//
//   lines   contour lines per unit of height, before a cue's density
//   speed   how fast the ground drifts by itself; 0 holds it still
//
// It mounts when the page has loaded (`when: "loaded"`), so Three.js never competes with the words
// for a slow connection.
//
// It draws in the builder's canvas too (`canvas` below): one still frame of the ground, in the canvas's
// own window, so the page being edited looks as it will.
//
// Without WebGL, without scripts and in print, styles/field.css draws still rings instead. People who
// ask for less motion, or pause it with the Motion Toggle, get one still frame of the right ground, redrawn only when the page changes.

import { Color, CustomBlending, Mesh, OneFactor, OneMinusSrcAlphaFactor, PerspectiveCamera, PlaneGeometry, Scene, ShaderMaterial, Vector3, WebGLRenderer } from 'three'
import { current, watch } from './lib/state.js'

const NOISE = /* glsl */ `
vec3 hash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)), dot(p, vec3(269.5, 183.3, 246.1)), dot(p, vec3(113.5, 271.9, 124.6)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(
    mix(mix(dot(hash3(i), f), dot(hash3(i + vec3(1, 0, 0)), f - vec3(1, 0, 0)), u.x),
        mix(dot(hash3(i + vec3(0, 1, 0)), f - vec3(0, 1, 0)), dot(hash3(i + vec3(1, 1, 0)), f - vec3(1, 1, 0)), u.x), u.y),
    mix(mix(dot(hash3(i + vec3(0, 0, 1)), f - vec3(0, 0, 1)), dot(hash3(i + vec3(1, 0, 1)), f - vec3(1, 0, 1)), u.x),
        mix(dot(hash3(i + vec3(0, 1, 1)), f - vec3(0, 1, 1)), dot(hash3(i + vec3(1, 1, 1)), f - vec3(1, 1, 1)), u.x), u.y),
    u.z);
}
`

// The ground's height at a place. The vertex shader lifts the mesh by it; the fragment shader asks again
// for every pixel, so a contour is a smooth line however coarse the mesh is.
const TERRAIN = /* glsl */ `
uniform float uSeed;
uniform float uTime;
uniform float uFlow;
uniform float uRelief;
uniform vec3 uPointer;
${NOISE}
float terrain(vec2 ground) {
  // The third axis is the seed: moving along it turns one terrain into another without a cut.
  vec3 at = vec3(ground.x, ground.y - uFlow, uSeed * 1.7 + uTime);
  float height = noise(at * vec3(0.15, 0.15, 1.0)) + 0.45 * noise(at * vec3(0.36, 0.36, 1.3) + 7.3) + 0.16 * noise(at * vec3(0.9, 0.9, 1.9) + 19.1);
  vec2 away = ground - uPointer.xy;
  return height * 1.7 * uRelief + uPointer.z * 0.75 * exp(-dot(away, away) / 7.0);
}
`

const VERTEX = /* glsl */ `
uniform float uReach;
varying float vFade;
varying vec2 vGround;
${TERRAIN}
void main() {
  vGround = position.xy;
  vFade = 1.0 - smoothstep(uReach * 0.45, uReach, length(position.xy - vec2(0.0, 1.5)));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xy, terrain(position.xy), 1.0);
}
`

const FRAGMENT = /* glsl */ `
uniform vec3 uInk;
uniform vec3 uAccent;
uniform vec3 uShoal;
uniform float uLines;
uniform float uDash;
uniform float uInkAlpha;
uniform float uStrength;
varying float vFade;
varying vec2 vGround;
${TERRAIN}
void main() {
  float height = terrain(vGround);
  float level = height * uLines;
  float width = fwidth(level);
  float line = 1.0 - smoothstep(width * 0.4, width * 1.25, abs(fract(level - 0.5) - 0.5));
  // Too many lines in one pixel is a grey smear: let them go where the ground is steep or far.
  line *= 1.0 - smoothstep(0.3, 0.7, width);
  float fifth = level / 5.0;
  float fifthWidth = fwidth(fifth);
  // Every fifth line is an index contour, a little heavier and in the accent, as on a printed sheet.
  float index = 1.0 - smoothstep(fifthWidth * 0.7, fifthWidth * 1.7, abs(fract(fifth - 0.5) - 0.5));
  index *= 1.0 - smoothstep(0.2, 0.5, fifthWidth);
  float dashes = mix(1.0, step(0.45, fract((vGround.x + vGround.y) * 1.6)), uDash);
  float ink = max(line * uInkAlpha, index * 0.6) * dashes * uStrength;
  // Below the datum is water: a flat tint, as charts print shoals.
  float water = smoothstep(-0.05, -0.5, height) * 0.5 * uStrength;
  vec3 colour = mix(uInk, uAccent, index);
  float alpha = (ink + water * (1.0 - ink)) * vFade;
  gl_FragColor = vec4((colour * ink + uShoal * water * (1.0 - ink)) * vFade, alpha);
}
`

/** Mounted in the builder's canvas as well as on the site. */
export const canvas = true

const number = (value, fallback) => (Number.isFinite(Number(value)) && value !== '' && value !== null ? Number(value) : fallback)

export function mount(el, props, { token, reducedMotion, signal, canvas: editing = false, window: win = window, document: doc = document }) {
  // In the builder it holds still, as for those who ask for less motion: the page is what moves there.
  const calm = reducedMotion || editing
  const lines = number(props.lines, 5)
  const speed = number(props.speed, 1)
  const small = win.matchMedia('(max-width: 767.98px)').matches

  let renderer
  try {
    renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
  } catch {
    // No WebGL: the rings of styles/field.css stay.
    return
  }
  renderer.setPixelRatio(Math.min(win.devicePixelRatio || 1, small ? 1.5 : 2))
  renderer.setClearColor(0x000000, 0)

  const canvas = renderer.domElement
  canvas.setAttribute('aria-hidden', 'true')
  el.append(canvas)

  const uniforms = {
    uSeed: { value: 1 }, uTime: { value: 0 }, uFlow: { value: 0 }, uRelief: { value: 1 }, uReach: { value: 28 },
    uPointer: { value: new Vector3(0, 0, 0) }, uLines: { value: lines }, uDash: { value: 0 }, uInkAlpha: { value: 0.3 }, uStrength: { value: 1 },
    uInk: { value: new Color() }, uAccent: { value: new Color() }, uShoal: { value: new Color() },
  }
  const segments = small ? 120 : 200
  const geometry = new PlaneGeometry(64, 64, segments, segments)
  const material = new ShaderMaterial({
    uniforms, vertexShader: VERTEX, fragmentShader: FRAGMENT, transparent: true,
    // The shader writes colour already multiplied by its alpha.
    blending: CustomBlending, blendSrc: OneFactor, blendDst: OneMinusSrcAlphaFactor,
  })
  const ground = new Mesh(geometry, material)
  ground.rotation.x = -Math.PI / 2
  ground.frustumCulled = false
  const scene = new Scene()
  scene.add(ground)
  const camera = new PerspectiveCamera(35, 1, 0.1, 200)

  // The design's colours where the block is: they change with light and dark.
  const paint = () => {
    const read = (path, fallback) => {
      try {
        return new Color(token(path) || fallback)
      } catch {
        return new Color(fallback)
      }
    }
    uniforms.uInk.value.copy(read('color.foreground', '#0e1b1c'))
    uniforms.uAccent.value.copy(read('color.primary', '#b3136f'))
    uniforms.uShoal.value.copy(read('color.shoal', '#c9dad6'))
    // Light lines on a dark sheet read heavier than dark lines on a light one.
    uniforms.uInkAlpha.value = uniforms.uInk.value.getHSL({ h: 0, s: 0, l: 0 }).l > 0.5 ? 0.2 : 0.27
    still()
  }

  // Where things are heading, and where they are: everything eases, nothing jumps.
  let goal = current()
  const now = { ...goal }
  const pointer = { x: 0, y: 0, toX: 0, toY: 0, lift: 0, toLift: 0, viewX: 0, viewY: 0 }
  let scroll = win.scrollY
  let flow = scroll
  let surge = 0
  let frame = 0
  let before = 0
  let visible = !doc.hidden

  const eye = new Vector3()
  const look = new Vector3()
  const ray = new Vector3()

  const place = () => {
    // 0 looks straight down, as a chart does; 1 looks across the ground.
    const angle = ((86 - 60 * Math.min(1, Math.max(0, now.tilt))) * Math.PI) / 180
    const distance = 27 - 11 * now.tilt
    eye.set(pointer.viewX * 1.4, Math.sin(angle) * distance, Math.cos(angle) * distance + 1.5 - pointer.viewY * 0.8)
    look.set(pointer.viewX * 0.3, 0, 1.5 - 4 * now.tilt)
    camera.position.copy(eye)
    camera.lookAt(look)
    uniforms.uReach.value = 24 + 14 * now.tilt
  }

  const draw = () => {
    uniforms.uSeed.value = now.seed
    uniforms.uRelief.value = now.relief * (1 + surge * 0.35)
    uniforms.uLines.value = lines * now.density
    uniforms.uDash.value = now.dash
    uniforms.uStrength.value = now.ink
    uniforms.uFlow.value = flow * 0.004
    uniforms.uPointer.value.set(pointer.x, -pointer.y, pointer.lift)
    place()
    renderer.render(scene, camera)
  }

  /** One frame of the right ground, for when nothing moves by itself. */
  function still() {
    if (frame || !visible) return
    Object.assign(now, goal)
    flow = scroll = win.scrollY
    draw()
  }

  const settle = (from, to, rate, dt) => from + (to - from) * (1 - Math.exp(-rate * dt))

  const tick = (time) => {
    const dt = Math.min(0.05, (time - before) / 1000 || 0.016)
    before = time
    for (const key of Object.keys(now)) now[key] = settle(now[key], goal[key], key === 'seed' ? 2.2 : 3, dt)
    scroll = win.scrollY
    const moved = Math.abs(scroll - flow)
    flow = settle(flow, scroll, 6, dt)
    surge = settle(surge, Math.min(1, moved / 600), 5, dt)
    pointer.x = settle(pointer.x, pointer.toX, 5, dt)
    pointer.y = settle(pointer.y, pointer.toY, 5, dt)
    pointer.lift = settle(pointer.lift, pointer.toLift, 2.5, dt)
    pointer.toLift = settle(pointer.toLift, 0, 0.5, dt)
    pointer.viewX = settle(pointer.viewX, pointer.nx ?? 0, 2, dt)
    pointer.viewY = settle(pointer.viewY, pointer.ny ?? 0, 2, dt)
    uniforms.uTime.value += dt * 0.022 * speed * (1 + surge * 14)
    draw()
    frame = requestAnimationFrame(tick)
  }

  const run = () => {
    cancelAnimationFrame(frame)
    frame = 0
    if (calm || !visible) return still()
    before = performance.now()
    frame = requestAnimationFrame(tick)
  }

  const resize = () => {
    const width = el.clientWidth || win.innerWidth
    const height = el.clientHeight || win.innerHeight
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    // A tall phone sees a narrow strip of ground: widen the view so there is terrain, not one slope.
    camera.fov = camera.aspect < 1 ? 35 + 20 * (1 - camera.aspect) : 35
    camera.updateProjectionMatrix()
    still()
  }

  const stopWatching = watch((cue) => {
    goal = cue
    still()
  })

  const size = new ResizeObserver(resize)
  size.observe(el)
  resize()
  paint()

  // The pointer, as a place on the ground: where the line from the eye through it meets height zero.
  win.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch' || calm) return
    pointer.nx = (event.clientX / win.innerWidth) * 2 - 1
    pointer.ny = -((event.clientY / win.innerHeight) * 2 - 1)
    ray.set(pointer.nx, pointer.ny, 0.5).unproject(camera).sub(camera.position).normalize()
    if (ray.y >= -0.01) return
    const reach = -camera.position.y / ray.y
    pointer.toX = camera.position.x + ray.x * reach
    pointer.toY = camera.position.z + ray.z * reach
    pointer.toLift = 1
  }, { signal, passive: true })

  win.addEventListener('scroll', () => frame || still(), { signal, passive: true })
  doc.addEventListener('visibilitychange', () => {
    visible = !doc.hidden
    run()
  }, { signal })

  // Leaving a page stirs the ground; the next page's cue is what it settles into.
  doc.addEventListener('cms:before-leave', () => (surge = 1), { signal })

  // Light and dark: the visitor's setting, or the site's own switch on <html data-theme>.
  const scheme = win.matchMedia('(prefers-color-scheme: dark)')
  scheme.addEventListener('change', paint, { signal })
  const theme = new MutationObserver(paint)
  theme.observe(doc.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault()
    cancelAnimationFrame(frame)
    frame = 0
    el.classList.remove('is-live')
  }, { signal })
  canvas.addEventListener('webglcontextrestored', () => {
    el.classList.add('is-live')
    run()
  }, { signal })

  el.classList.add('is-live')
  run()

  return () => {
    cancelAnimationFrame(frame)
    stopWatching()
    size.disconnect()
    theme.disconnect()
    el.classList.remove('is-live')
    canvas.remove()
    geometry.dispose()
    material.dispose()
    renderer.dispose()
    // Mounted afresh at every edit in the builder: give the context back now, not when it is collected.
    renderer.forceContextLoss()
  }
}
