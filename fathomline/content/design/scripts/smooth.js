// Smooth scrolling on every page (content/design/code.json loads this file everywhere).
// Lenis eases the wheel; the page still scrolls natively, so sticky elements, anchors, scroll
// animations and the keyboard work as they do without it. People who ask for less motion, and
// touch screens, keep the browser's own scrolling.
import Lenis from 'lenis'

const reduced = matchMedia('(prefers-reduced-motion: reduce)')
let lenis = null
let frame = 0

function start() {
  if (lenis || reduced.matches) return
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.9, anchors: true })
  const tick = (time) => {
    lenis?.raf(time)
    frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
}

function stop() {
  cancelAnimationFrame(frame)
  lenis?.destroy()
  lenis = null
}

reduced.addEventListener('change', () => (reduced.matches ? stop() : start()))

// A page that arrives without a page load starts where the site put it, not where the last one was eased to.
document.addEventListener('cms:after-enter', () => {
  lenis?.resize()
  lenis?.scrollTo(window.scrollY, { immediate: true, force: true })
})

start()
