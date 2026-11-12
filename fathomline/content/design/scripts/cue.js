// A block behaviour: tunes the field while this block's page is open ("page") or while the block
// crosses the middle of the screen ("view").
//   { "behavior": { "module": "cue", "props": { "layer": "view", "seed": 4, "relief": 1.4 } } }
// The numbers are explained in lib/state.js. On a template they can come from the entry:
//   "props": { "layer": "page", "seed": "{entry.seed}" }
import { show } from './lib/state.js'

export function mount(el, props) {
  if (props.layer !== 'view') return show('page', props)

  let hide = null
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) hide ??= show('view', props)
    else hide = void hide?.()
  }, { rootMargin: '-50% 0px -50% 0px' })
  io.observe(el)

  return () => {
    io.disconnect()
    hide?.()
  }
}
