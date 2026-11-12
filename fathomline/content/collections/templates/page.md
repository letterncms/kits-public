---
id: 01m7sh00050000000000000002
title: Page
status: published
position: 2
description: 'The field, the header, the page’s own blocks, the footer.'
collections:
  - pages
---

::: component {"id":"t-field","props":{"ref":"field"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"label":"Main","style":{"base":{"minHeight":"60vh"}},"anchor":"main"}
:::: outlet {"id":"t-outlet"}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
