// What the field (field.js) should look like right now. Blocks say so through cue.js and rows.js;
// the field listens. A cue is a few numbers an editor typed into a block's Options:
//   seed     which ground: any number, each a different terrain
//   relief   how high it rises (0 is flat water)
//   density  how many contour lines per unit of height
//   tilt     0 looks straight down like a chart, 1 looks across it
//   dash     0 solid lines, 1 dashed: ground nobody has surveyed
//   ink      how strongly it prints: 1 is full, less steps back behind text
// Layers stack: the page's cue, then the section in view, then whatever the pointer rests on.

export const defaults = { seed: 1, relief: 1, density: 1, tilt: 0.6, dash: 0, ink: 1 }

const order = { page: 0, view: 1, hover: 2 }
const layers = new Map()
const listeners = new Set()

const clean = (cue) => {
  const out = {}
  for (const key of Object.keys(defaults)) {
    const value = Number(cue?.[key])
    if (cue?.[key] !== undefined && cue[key] !== '' && Number.isFinite(value)) out[key] = value
  }
  return out
}

export function current() {
  const sorted = [...layers.values()].sort((a, b) => order[a.layer] - order[b.layer] || a.at - b.at)
  return Object.assign({}, defaults, ...sorted.map((entry) => entry.cue))
}

const tell = () => listeners.forEach((listener) => listener(current()))

let count = 0

/** Put a cue on a layer ("page", "view" or "hover"). Returns the function that takes it away again. */
export function show(layer, cue) {
  const key = Symbol(layer)
  layers.set(key, { layer: layer in order ? layer : 'view', cue: clean(cue), at: ++count })
  tell()
  return () => {
    layers.delete(key) && tell()
  }
}

/** Called with the cue whenever it changes. Returns the function that stops listening. */
export function watch(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
