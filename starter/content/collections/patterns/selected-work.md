---
id: 01m7bf0hecpc4at7yn43gy5e4j
title: 'Selected Work'
status: published
published_at: '2026-11-13T22:03:54+00:00'
position: 23
category: Lists
description: 'Projects in two staggered columns, filled in from Work.'
---

::: section {"id":"selected-work-s","props":{"width":"wide"}}
:::: box {"id":"selected-work-head","style":{"base":{"display":"flex","justifyContent":"space-between","alignItems":"end","gap":"token:space.6","paddingTop":"token:space.8","borderTop":"1px solid token:color.border"}}}
::::: heading {"id":"selected-work-t","props":{"text":"Selected work","level":"2"}}
:::::

::::: link {"id":"selected-work-l","props":{"label":"All work","url":"entry:01m7bf0hdtbd9d9d33m5gp91es","icon":"arrow-right","icon_position":"end"},"style":{"base":{"color":"token:color.foreground"}},"class":"meta"}
:::::
::::

:::: repeat {"id":"selected-work-r","props":{"source":"entries","collection":"work","sort":"position","limit":4},"style":{"base":{"display":"grid","gridTemplateColumns":"repeat(2,minmax(0,1fr))","columnGap":"token:space.grid","rowGap":"token:space.block","marginTop":"token:space.12"},"mobile":{"gridTemplateColumns":"minmax(0,1fr)"}}}
::::: box {"id":"selected-work-i","style":{"even":{"paddingTop":"clamp(0rem, 12vw, 12rem)"},"mobile:even":{"paddingTop":"0"}}}
:::::: component {"id":"selected-work-c","props":{"ref":"project-card","values":{"aspect":"4/5"}},"bind":{"values.title":"item.title","values.image":"item.cover","values.link":"item.url","values.discipline":"item.discipline","values.year":"item.year"}}
::::::
:::::
::::
:::
