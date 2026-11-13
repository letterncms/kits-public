---
id: 01m7bf0hepk9ytgapy7acd9xzx
title: Blank
status: published
published_at: '2026-11-13T22:03:54+00:00'
position: 1
description: 'Header, footer and the page’s own blocks in between, edge to edge. For a home page or a landing page built from sections.'
---

::: component {"id":"d-header","props":{"ref":"header"}}
:::

::: box {"id":"d-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: outlet {"id":"d-content"}
::::
:::

::: component {"id":"d-footer","props":{"ref":"footer"}}
:::
