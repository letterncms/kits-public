// A block behaviour: a small printed plate of one survey's ground, drawn as contour lines on a canvas.
// The same numbers that tune the field draw the plate, so a card shows the ground its page opens on:
//   { "behavior": { "module": "plate", "when": "visible", "props": { "seed": "{item.seed}", "relief": "{item.relief}", "density": "{item.density}" } } }
// Without scripts the block keeps the rings styles/plate.css gives it. It draws in the builder's canvas
// too (`canvas` below), in the canvas's own window, so a card there shows its ground.

/** Mounted in the builder's canvas as well as on the site. */
export const canvas = true

const number = (value, fallback) => (value !== '' && value != null && Number.isFinite(Number(value)) ? Number(value) : fallback)

/** Smooth noise from a seed: the same seed is the same ground on every visit. */
function terrain(seed) {
  const hash = (x, y) => {
    const n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453
    return n - Math.floor(n)
  }
  const smooth = (x, y) => {
    const ix = Math.floor(x)
    const iy = Math.floor(y)
    const fx = x - ix
    const fy = y - iy
    const ux = fx * fx * (3 - 2 * fx)
    const uy = fy * fy * (3 - 2 * fy)
    const top = hash(ix, iy) + (hash(ix + 1, iy) - hash(ix, iy)) * ux
    const bottom = hash(ix, iy + 1) + (hash(ix + 1, iy + 1) - hash(ix, iy + 1)) * ux
    return top + (bottom - top) * uy
  }
  return (x, y) => smooth(x, y) + 0.5 * smooth(x * 2.1 + 5.2, y * 2.1 + 1.3) + 0.22 * smooth(x * 4.3 + 9.1, y * 4.3 + 7.7)
}

export function mount(el, props, { token, signal, window: win = window, document: doc = document }) {
  const seed = number(props.seed, 1)
  const relief = number(props.relief, 1)
  const density = number(props.density, 1)
  const canvas = doc.createElement('canvas')
  canvas.setAttribute('aria-hidden', 'true')
  const context = canvas.getContext('2d')
  if (!context) return
  el.append(canvas)
  const height = terrain(seed)

  const draw = () => {
    const width = el.clientWidth
    const tall = el.clientHeight
    if (!width || !tall) return
    const ratio = Math.min(win.devicePixelRatio || 1, 2)
    canvas.width = Math.round(width * ratio)
    canvas.height = Math.round(tall * ratio)
    context.setTransform(ratio, 0, 0, ratio, 0, 0)
    context.clearRect(0, 0, width, tall)

    const cell = 7
    const columns = Math.ceil(width / cell) + 1
    const rows = Math.ceil(tall / cell) + 1
    const scale = 2.6 / Math.max(columns, rows)
    const grid = new Float32Array(columns * rows)
    for (let y = 0; y < rows; y++) for (let x = 0; x < columns; x++) grid[y * columns + x] = height(x * scale, y * scale) * relief * 9 * density

    const ink = token('color.foreground') || '#0e1b1c'
    const accent = token('color.primary') || '#b3136f'
    const max = Math.ceil(1.72 * relief * 9 * density)

    for (let level = 1; level < max; level++) {
      const index = level % 5 === 0
      context.beginPath()
      for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < columns - 1; x++) {
          const a = grid[y * columns + x]
          const b = grid[y * columns + x + 1]
          const c = grid[(y + 1) * columns + x + 1]
          const d = grid[(y + 1) * columns + x]
          const kind = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0)
          if (kind === 0 || kind === 15) continue
          // Where the level crosses each edge of the cell.
          const top = [(x + (level - a) / (b - a)) * cell, y * cell]
          const right = [(x + 1) * cell, (y + (level - b) / (c - b)) * cell]
          const bottom = [(x + (level - d) / (c - d)) * cell, (y + 1) * cell]
          const left = [x * cell, (y + (level - a) / (d - a)) * cell]
          const lines = { 1: [left, bottom], 2: [bottom, right], 3: [left, right], 4: [top, right], 5: [left, top, bottom, right], 6: [top, bottom], 7: [left, top], 8: [left, top], 9: [top, bottom], 10: [left, bottom, top, right], 11: [top, right], 12: [left, right], 13: [bottom, right], 14: [left, bottom] }[kind]
          for (let i = 0; i < lines.length; i += 2) {
            context.moveTo(lines[i][0], lines[i][1])
            context.lineTo(lines[i + 1][0], lines[i + 1][1])
          }
        }
      }
      context.strokeStyle = index ? accent : ink
      context.globalAlpha = index ? 0.9 : 0.34
      context.lineWidth = index ? 1.25 : 1
      context.stroke()
    }
    el.classList.add('is-drawn')
  }

  const size = new ResizeObserver(draw)
  size.observe(el)
  win.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', draw, { signal })
  const theme = new MutationObserver(draw)
  theme.observe(doc.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  return () => {
    size.disconnect()
    theme.disconnect()
    canvas.remove()
    el.classList.remove('is-drawn')
  }
}
