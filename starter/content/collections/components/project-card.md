---
id: 01m7bf0hdp581k5svex4atn8dz
title: 'Project Card'
status: published
published_at: '2026-11-13T22:03:53+00:00'
position: 4
category: Cards
description: 'A project in a list: a large photo, its title, discipline and year, linked to the project.'
props:
  -
    handle: title
    type: text
    label: Title
    default: 'House in the dunes'
  -
    handle: image
    type: media
    label: Image
    max: 1
  -
    handle: link
    type: url
    label: Link
  -
    handle: discipline
    type: text
    label: Discipline
    default: Rooms
  -
    handle: year
    type: text
    label: Year
    default: '2026'
  -
    handle: aspect
    type: select
    label: Shape
    options:
      4/5: Portrait
      4/3: Landscape
      1/1: Square
      16/9: Wide
    default: 4/3
---

::: box {"id":"pc","props":{"tag":"article"},"label":"Project card","style":{"base":{"position":"relative","color":"inherit","display":"flex","flexDirection":"column","gap":"token:space.4"}},"bind":{"link":"props.link"},"logic":{"behaviors":{"group":true}}}
:::: box {"id":"pc-media","style":{"base":{"overflow":"clip","backgroundColor":"token:color.surface"}}}
::::: image {"id":"pc-image","props":{"sizes":"(min-width: 64rem) 50vw, 100vw"},"style":{"base":{"transition":"transform 900ms cubic-bezier(.2,.8,.2,1)"},"group-hover":{"transform":"scale(1.03)"}},"bind":{"image":"props.image","aspect":"props.aspect"}}
:::::
::::

:::: box {"id":"pc-text","style":{"base":{"display":"flex","justifyContent":"space-between","alignItems":"baseline","gap":"token:space.4"}}}
::::: heading {"id":"pc-title","props":{"level":"3"},"style":{"base":{"fontSize":"token:text.xl","lineHeight":"1.25","textDecorationColor":"transparent","textUnderlineOffset":"0.2em","textDecorationThickness":"1px","transition":"text-decoration-color 200ms ease"},"group-hover":{"textDecorationColor":"currentColor"}},"bind":{"text":"props.title"}}
:::::

::::: box {"id":"pc-meta","style":{"base":{"display":"flex","gap":"token:space.3","flexShrink":"0"}},"class":"meta"}
:::::: paragraph {"id":"pc-discipline","props":{"tag":"span"},"bind":{"text":"props.discipline","visible":"props.discipline"}}
::::::

:::::: paragraph {"id":"pc-year","props":{"tag":"span"},"bind":{"text":"props.year","visible":"props.year"}}
::::::
:::::
::::
:::
