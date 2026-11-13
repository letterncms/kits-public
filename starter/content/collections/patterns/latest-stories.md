---
id: 01m7bf0hecpc4at7yn43gy5e4d
title: 'Latest Stories'
status: published
published_at: '2026-11-13T22:03:53+00:00'
position: 18
category: Lists
description: 'The three newest stories from the journal, filled in by themselves.'
---

::: section {"id":"latest-stories-s","props":{"width":"wide"}}
:::: box {"id":"latest-stories-head","style":{"base":{"display":"flex","justifyContent":"space-between","alignItems":"end","gap":"token:space.6","paddingTop":"token:space.8","borderTop":"1px solid token:color.border"}}}
::::: heading {"id":"latest-stories-t","props":{"text":"From the journal","level":"2"}}
:::::

::::: link {"id":"latest-stories-l","props":{"label":"All stories","url":"entry:01m7bf0hdtbd9d9d33m5gp91et","icon":"arrow-right","icon_position":"end"},"style":{"base":{"color":"token:color.foreground"}},"class":"meta"}
:::::
::::

:::: repeat {"id":"latest-stories-r","props":{"source":"entries","collection":"posts","sort":"-published_at","limit":3},"style":{"base":{"display":"grid","gridTemplateColumns":"repeat(3,minmax(0,1fr))","gap":"token:space.grid","marginTop":"token:space.12"},"tablet":{"gridTemplateColumns":"repeat(2,minmax(0,1fr))"},"mobile":{"gridTemplateColumns":"minmax(0,1fr)","rowGap":"token:space.12"}}}
::::: component {"id":"latest-stories-c","props":{"ref":"story-card"},"bind":{"values.title":"item.title","values.image":"item.cover","values.link":"item.url","values.date":"item.date|date:F j, Y","values.topic":"item.topic"}}
:::::
::::
:::
