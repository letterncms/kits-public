---
id: 01m7sh00050000000000000001
title: Default
status: published
position: 1
description: 'Used for anything without its own template.'
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
