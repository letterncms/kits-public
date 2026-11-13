---
id: 01m7bf0hdp581k5svex4atn8dy
title: 'Story Card'
status: published
published_at: '2026-11-13T22:03:53+00:00'
position: 3
category: Cards
description: 'A story in a list: its cover, topic, date and title, linked to the story.'
props:
  -
    handle: title
    type: text
    label: Title
    default: 'A week in the workshop'
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
    handle: date
    type: text
    label: Date
    default: 'October 2, 2026'
  -
    handle: topic
    type: text
    label: Topic
    default: Making
---

::: box {"id":"sc","props":{"tag":"article"},"label":"Story card","style":{"base":{"position":"relative","color":"inherit","display":"flex","flexDirection":"column","gap":"token:space.4"}},"bind":{"link":"props.link"},"logic":{"behaviors":{"group":true}}}
:::: box {"id":"sc-media","style":{"base":{"overflow":"clip","backgroundColor":"token:color.surface","aspectRatio":"4/3"}}}
::::: image {"id":"sc-image","props":{"aspect":"4/3","sizes":"(min-width: 64rem) 32vw, (min-width: 48rem) 48vw, 100vw"},"style":{"base":{"transition":"transform 900ms cubic-bezier(.2,.8,.2,1)"},"group-hover":{"transform":"scale(1.03)"}},"bind":{"image":"props.image"}}
:::::
::::

:::: box {"id":"sc-meta","style":{"base":{"display":"flex","gap":"token:space.2"}},"class":"meta"}
::::: paragraph {"id":"sc-topic","props":{"tag":"span"},"style":{"base":{"color":"token:color.foreground"}},"bind":{"text":"props.topic","visible":"props.topic"}}
:::::

::::: paragraph {"id":"sc-date","props":{"tag":"span"},"bind":{"text":"props.date","visible":"props.date"}}
:::::
::::

:::: heading {"id":"sc-title","props":{"level":"3"},"style":{"base":{"fontSize":"token:text.xl","lineHeight":"1.25","maxWidth":"22em","textDecorationColor":"transparent","textUnderlineOffset":"0.2em","textDecorationThickness":"1px","transition":"text-decoration-color 200ms ease"},"group-hover":{"textDecorationColor":"currentColor"}},"bind":{"text":"props.title"}}
::::
:::
