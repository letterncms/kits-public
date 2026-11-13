---
id: 01m7bf0hepk9ytgapy7acd9xzz
title: 'Text Page'
status: published
published_at: '2026-11-13T22:03:54+00:00'
position: 3
description: 'A title and long-form text in a comfortable reading column, for terms, a privacy notice or a plain page.'
collections:
  - pages
---

::: component {"id":"tx-header","props":{"ref":"header"}}
:::

::: box {"id":"tx-main","props":{"tag":"main"},"label":"Main","style":{"base":{"paddingInline":"token:space.gutter","paddingTop":"clamp(3rem, 8vw, 8rem)","paddingBottom":"token:space.section"}},"anchor":"main"}
:::: box {"id":"tx-head","props":{"tag":"header"},"style":{"base":{"maxWidth":"token:container.prose","marginInline":"auto","marginBottom":"token:space.12","display":"flex","flexDirection":"column","gap":"token:space.5"}}}
::::: heading {"id":"tx-title","props":{"level":"1"},"bind":{"text":"entry.title"}}
:::::

::::: paragraph {"id":"tx-summary","props":{"tag":"p"},"style":{"base":{"color":"token:color.muted"}},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lede"}
:::::
::::

:::: outlet {"id":"tx-body","props":{"wrap":true,"prose":true},"style":{"base":{"maxWidth":"token:container.prose","marginInline":"auto"}}}
::::
:::

::: component {"id":"tx-footer","props":{"ref":"footer"}}
:::
