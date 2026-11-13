---
id: 01m7bf0hepk9ytgapy7acd9y00
title: Story
status: published
published_at: '2026-11-13T22:03:54+00:00'
position: 4
description: 'A centred title, a wide cover photo, the story in a reading column, then the next stories.'
collections:
  - posts
---

::: component {"id":"po-header","props":{"ref":"header"}}
:::

::: box {"id":"po-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"po-article","props":{"tag":"article"},"label":"Story"}
::::: box {"id":"po-head","props":{"tag":"header"},"label":"Title","style":{"base":{"maxWidth":"56rem","marginInline":"auto","paddingInline":"token:space.gutter","paddingTop":"clamp(3rem, 8vw, 8rem)","paddingBottom":"token:space.block","display":"flex","flexDirection":"column","alignItems":"center","gap":"token:space.6","textAlign":"center"}}}
:::::: box {"id":"po-meta","style":{"base":{"display":"flex","gap":"token:space.3","alignItems":"center"}},"class":"meta"}
::::::: paragraph {"id":"po-topic","props":{"tag":"span"},"style":{"base":{"color":"token:color.foreground"}},"bind":{"text":"entry.topic","visible":"entry.topic"}}
:::::::

::::::: paragraph {"id":"po-dot","props":{"text":"·","tag":"span"},"attrs":{"aria-hidden":"true"},"bind":{"visible":"entry.topic"}}
:::::::

::::::: paragraph {"id":"po-date","props":{"tag":"time"},"bind":{"text":"entry.date|date:F j, Y"}}
:::::::
::::::

:::::: heading {"id":"po-title","props":{"level":"1"},"style":{"base":{"fontSize":"token:text.5xl"}},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"po-summary","props":{"tag":"p"},"style":{"base":{"maxWidth":"34em","color":"token:color.muted","fontSize":"token:text.xl"}},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lede"}
::::::
:::::

::::: image {"id":"po-cover","props":{"aspect":"16/9","priority":true,"sizes":"(min-width: 100rem) 100rem, 100vw"},"style":{"base":{"maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter"},"mobile":{"paddingInline":"0"}},"bind":{"image":"entry.cover","visible":"entry.cover"}}
:::::

::::: outlet {"id":"po-body","props":{"wrap":true,"prose":true},"style":{"base":{"maxWidth":"calc(token:container.prose + 2 * token:space.gutter)","marginInline":"auto","paddingInline":"token:space.gutter","paddingTop":"token:space.block","paddingBottom":"token:space.12"}}}
:::::

::::: repeat {"id":"po-tags","props":{"source":"list","path":"entry.tags","tag":"ul"},"label":"Tags","style":{"base":{"maxWidth":"calc(token:container.prose + 2 * token:space.gutter)","marginInline":"auto","paddingInline":"token:space.gutter","display":"flex","flexWrap":"wrap","gap":"token:space.2"}}}
:::::: paragraph {"id":"po-tag","props":{"tag":"li"},"style":{"base":{"paddingInline":"0.75rem","paddingBlock":"0.3rem","border":"1px solid token:color.border","borderRadius":"token:radius.full","fontSize":"token:text.sm","color":"token:color.muted"}},"bind":{"text":"{item}"}}
::::::
:::::
::::

:::: section {"id":"po-more","props":{"width":"wide","tag":"aside"},"label":"More stories","style":{"base":{"marginTop":"token:space.block","borderTop":"1px solid token:color.border","paddingTop":"token:space.block"}}}
::::: box {"id":"po-more-head","style":{"base":{"display":"flex","justifyContent":"space-between","alignItems":"baseline","gap":"token:space.4"}}}
:::::: heading {"id":"po-more-title","props":{"text":"More from the journal","level":"2"},"style":{"base":{"fontSize":"token:text.2xl"}}}
::::::

:::::: link {"id":"po-more-all","props":{"label":"All stories","url":"entry:01m7bf0hdtbd9d9d33m5gp91et"},"class":"meta"}
::::::
:::::

::::: repeat {"id":"po-more-list","props":{"source":"entries","collection":"posts","sort":"-published_at","limit":3,"skipCurrent":true},"style":{"base":{"display":"grid","gridTemplateColumns":"repeat(3,minmax(0,1fr))","gap":"token:space.grid","marginTop":"token:space.8"},"tablet":{"gridTemplateColumns":"repeat(2,minmax(0,1fr))","rowGap":"token:space.12"},"mobile":{"gridTemplateColumns":"minmax(0,1fr)"}}}
:::::: component {"id":"po-more-card","props":{"ref":"story-card"},"bind":{"values.title":"item.title","values.image":"item.cover","values.link":"item.url","values.date":"item.date|date:F j, Y","values.topic":"item.topic"}}
::::::
:::::
::::
:::

::: component {"id":"po-footer","props":{"ref":"footer"}}
:::
