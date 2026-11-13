---
id: 01m7bf0hepk9ytgapy7acd9y01
title: 'Story, Side by Side'
status: published
published_at: '2026-11-13T22:03:54+00:00'
position: 5
description: 'The title and facts in a column that stays in view, the cover and the story beside it.'
collections:
  - posts
---

::: component {"id":"ps-header","props":{"ref":"header"}}
:::

::: box {"id":"ps-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"ps-article","props":{"tag":"article"},"style":{"base":{"maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingTop":"clamp(2.5rem, 6vw, 6rem)","paddingBottom":"token:space.section","display":"grid","gridTemplateColumns":"repeat(12,minmax(0,1fr))","columnGap":"token:space.grid","rowGap":"token:space.10"}}}
::::: box {"id":"ps-side","props":{"tag":"header"},"style":{"base":{"gridColumn":"1 / span 4","alignSelf":"start","position":"sticky","top":"6.5rem","display":"flex","flexDirection":"column","gap":"token:space.6"},"tablet":{"gridColumn":"1 / -1","position":"static"}}}
:::::: box {"id":"ps-meta","style":{"base":{"display":"flex","gap":"token:space.3"}},"class":"meta"}
::::::: paragraph {"id":"ps-topic","props":{"tag":"span"},"style":{"base":{"color":"token:color.foreground"}},"bind":{"text":"entry.topic","visible":"entry.topic"}}
:::::::

::::::: paragraph {"id":"ps-date","props":{"tag":"time"},"bind":{"text":"entry.date|date:F j, Y"}}
:::::::
::::::

:::::: heading {"id":"ps-title","props":{"level":"1"},"style":{"base":{"fontSize":"token:text.4xl"}},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"ps-summary","props":{"tag":"p"},"style":{"base":{"fontSize":"token:text.lg","color":"token:color.muted","lineHeight":"1.5"}},"bind":{"text":"entry.summary","visible":"entry.summary"}}
::::::

:::::: link {"id":"ps-back","props":{"label":"All stories","url":"entry:01m7bf0hdtbd9d9d33m5gp91et","icon":"arrow-left"},"class":"meta"}
::::::
:::::

::::: box {"id":"ps-body","style":{"base":{"gridColumn":"6 / -1","display":"flex","flexDirection":"column","gap":"token:space.block"},"tablet":{"gridColumn":"1 / -1"}}}
:::::: image {"id":"ps-cover","props":{"aspect":"4/3","priority":true,"sizes":"(min-width: 64rem) 58vw, 100vw"},"bind":{"image":"entry.cover","visible":"entry.cover"}}
::::::

:::::: outlet {"id":"ps-content","props":{"wrap":true,"prose":true},"style":{"base":{"maxWidth":"token:container.prose"}}}
::::::
:::::
::::
:::

::: component {"id":"ps-footer","props":{"ref":"footer"}}
:::
