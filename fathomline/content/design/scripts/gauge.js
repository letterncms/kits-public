// A block behaviour: the reading of the sounding gauge counts with the scroll.
// The block's own scroll animation says how far along it is (`trigger.progress`): the design moves the
// lead line and the depth marks with `--cms-progress`, and this script turns the same number into the
// depth. The reading's text, typed by an editor, is where it ends:
//   data-gauge="value"   the reading
// Without scripts, or for people who ask for less motion, the blocks show the finished sounding.

export function mount(el, _props, { reducedMotion, signal }) {
  const value = el.querySelector('[data-gauge="value"]')
  if (!value || reducedMotion) return

  const text = value.textContent ?? ''
  const depth = Number.parseFloat(text.replace(',', '.'))
  if (!Number.isFinite(depth)) return
  const decimals = (text.split(/[.,]/)[1] ?? '').length

  el.addEventListener('cms:progress', (event) => {
    if (event.target === el) value.textContent = (depth * event.detail.progress).toFixed(decimals)
  }, { signal })

  return () => (value.textContent = text)
}
