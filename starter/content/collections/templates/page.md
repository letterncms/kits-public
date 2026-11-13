---
id: 01m7bf0hepk9ytgapy7acd9xzy
title: Page
status: published
published_at: '2026-11-13T22:03:54+00:00'
position: 2
description: 'A large title and the page’s summary, then its sections.'
collections:
  - pages
---

::: component {"id":"pg-header","props":{"ref":"header"}}
:::

::: box {"id":"pg-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"pg-head","props":{"tag":"header"},"label":"Title","style":{"base":{"maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingTop":"clamp(3rem, 9vw, 9rem)","paddingBottom":"token:space.block","display":"grid","gridTemplateColumns":"repeat(12,minmax(0,1fr))","columnGap":"token:space.grid","rowGap":"token:space.6","alignItems":"end"}}}
::::: heading {"id":"pg-title","props":{"level":"1"},"style":{"base":{"gridColumn":"1 / span 8","fontSize":"token:text.6xl","lineHeight":"token:leading.display","letterSpacing":"token:tracking.display"},"tablet":{"gridColumn":"1 / -1"}},"bind":{"text":"entry.title"}}
:::::

::::: paragraph {"id":"pg-summary","props":{"tag":"p"},"style":{"base":{"gridColumn":"9 / -1","color":"token:color.muted","fontSize":"token:text.xl"},"tablet":{"gridColumn":"1 / span 10"},"mobile":{"gridColumn":"1 / -1"}},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lede"}
:::::
::::

:::: outlet {"id":"pg-content"}
::::
:::

::: component {"id":"pg-footer","props":{"ref":"footer"}}
:::
