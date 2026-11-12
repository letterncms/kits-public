// A block behaviour for a list: the field turns into the ground of whichever item the pointer or the
// keyboard rests on. Each item carries its numbers as attributes, bound to its entry's fields:
//   "bind": { "attr:data-seed": "item.seed", "attr:data-relief": "item.relief" }
import { show } from './lib/state.js'

export function mount(el, _props, { signal }) {
  let hide = null
  let on = null

  const rest = (event) => {
    const item = event.target.closest?.('[data-seed]')
    if (item === on) return
    hide?.()
    on = item
    hide = item && el.contains(item) ? show('hover', item.dataset) : null
  }
  const leave = () => {
    hide?.()
    hide = on = null
  }

  el.addEventListener('pointerover', rest, { signal, passive: true })
  el.addEventListener('focusin', rest, { signal })
  el.addEventListener('pointerleave', leave, { signal, passive: true })
  el.addEventListener('focusout', (event) => el.contains(event.relatedTarget) || leave(), { signal })

  return leave
}
