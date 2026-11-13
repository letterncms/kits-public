---
id: 01m7bf0hepk9ytgapy7acd9y02
title: Project
status: published
published_at: '2026-11-13T22:03:54+00:00'
position: 6
description: 'A large title, the facts of the project, a full-width photo, the project’s own sections, then the next project.'
collections:
  - work
---

::: component {"id":"pj-header","props":{"ref":"header"}}
:::

::: box {"id":"pj-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"pj-head","props":{"tag":"header"},"label":"Title","style":{"base":{"maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingTop":"clamp(3rem, 9vw, 9rem)","paddingBottom":"token:space.block","display":"grid","gridTemplateColumns":"repeat(12,minmax(0,1fr))","columnGap":"token:space.grid","rowGap":"token:space.10"}}}
::::: link {"id":"pj-back","props":{"label":"Work","url":"entry:01m7bf0hdtbd9d9d33m5gp91es","icon":"arrow-left"},"style":{"base":{"gridColumn":"1 / -1","justifySelf":"start"},"hover":{"color":"token:color.foreground"}},"class":"meta"}
:::::

::::: heading {"id":"pj-title","props":{"level":"1"},"style":{"base":{"gridColumn":"1 / span 9","fontSize":"token:text.6xl","lineHeight":"token:leading.display","letterSpacing":"token:tracking.display"},"tablet":{"gridColumn":"1 / -1"}},"bind":{"text":"entry.title"}}
:::::

::::: paragraph {"id":"pj-summary","props":{"tag":"p"},"style":{"base":{"gridColumn":"1 / span 7"},"tablet":{"gridColumn":"1 / -1"}},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lede"}
:::::

::::: box {"id":"pj-facts","props":{"tag":"dl"},"label":"Facts","style":{"base":{"gridColumn":"9 / -1","alignSelf":"end","display":"grid","gridTemplateColumns":"minmax(0,1fr) minmax(0,1fr)","gap":"token:space.5 token:space.4","fontSize":"0.9375rem"},"tablet":{"gridColumn":"1 / -1","gridTemplateColumns":"repeat(4,minmax(0,1fr))"},"mobile":{"gridTemplateColumns":"minmax(0,1fr) minmax(0,1fr)"}}}
:::::: box {"id":"pj-f-client","bind":{"visible":"entry.client"}}
::::::: paragraph {"id":"pj-f-client-k","props":{"text":"Client","tag":"dt"},"style":{"base":{"color":"token:color.muted"}}}
:::::::

::::::: paragraph {"id":"pj-f-client-v","props":{"tag":"dd"},"bind":{"text":"entry.client"}}
:::::::
::::::

:::::: box {"id":"pj-f-place","bind":{"visible":"entry.place"}}
::::::: paragraph {"id":"pj-f-place-k","props":{"text":"Place","tag":"dt"},"style":{"base":{"color":"token:color.muted"}}}
:::::::

::::::: paragraph {"id":"pj-f-place-v","props":{"tag":"dd"},"bind":{"text":"entry.place"}}
:::::::
::::::

:::::: box {"id":"pj-f-discipline","bind":{"visible":"entry.discipline"}}
::::::: paragraph {"id":"pj-f-discipline-k","props":{"text":"Discipline","tag":"dt"},"style":{"base":{"color":"token:color.muted"}}}
:::::::

::::::: paragraph {"id":"pj-f-discipline-v","props":{"tag":"dd"},"bind":{"text":"entry.discipline"}}
:::::::
::::::

:::::: box {"id":"pj-f-year","bind":{"visible":"entry.year"}}
::::::: paragraph {"id":"pj-f-year-k","props":{"text":"Year","tag":"dt"},"style":{"base":{"color":"token:color.muted"}}}
:::::::

::::::: paragraph {"id":"pj-f-year-v","props":{"tag":"dd"},"bind":{"text":"entry.year"}}
:::::::
::::::
:::::
::::

:::: image {"id":"pj-cover","props":{"priority":true,"sizes":"100vw"},"style":{"mobile":{"aspectRatio":"4/3"},"base":{"aspectRatio":"21/9","overflow":"clip"}},"bind":{"image":"entry.cover","visible":"entry.cover"}}
::::

:::: outlet {"id":"pj-content"}
::::

:::: repeat {"id":"pj-next","props":{"source":"neighbors","show":"next","wrap":true},"label":"Next project","style":{"base":{"borderTop":"1px solid token:color.border"}}}
::::: box {"id":"pj-next-link","style":{"base":{"display":"grid","gridTemplateColumns":"minmax(0,1fr) minmax(0,1fr)","alignItems":"center","gap":"token:space.grid","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingBlock":"token:space.block"},"mobile":{"gridTemplateColumns":"minmax(0,1fr)"}},"bind":{"link":"item.url"},"logic":{"behaviors":{"group":true}}}
:::::: box {"id":"pj-next-text","style":{"base":{"display":"flex","flexDirection":"column","gap":"token:space.4"}}}
::::::: paragraph {"id":"pj-next-label","props":{"text":"Next project","tag":"p"},"class":"meta"}
:::::::

::::::: paragraph {"id":"pj-next-title","props":{"tag":"p"},"style":{"base":{"fontSize":"token:text.5xl","lineHeight":"token:leading.tight","letterSpacing":"token:tracking.tight","fontWeight":"token:weight.medium","transition":"transform 500ms cubic-bezier(.2,.8,.2,1)"},"group-hover":{"transform":"translateX(0.25rem)"}},"bind":{"text":"item.title"}}
:::::::
::::::

:::::: box {"id":"pj-next-media","style":{"base":{"overflow":"clip"}}}
::::::: image {"id":"pj-next-image","props":{"aspect":"16/9","sizes":"(min-width: 48rem) 50vw, 100vw"},"style":{"base":{"transition":"transform 900ms cubic-bezier(.2,.8,.2,1)"},"group-hover":{"transform":"scale(1.03)"}},"bind":{"image":"item.cover","visible":"item.cover"}}
:::::::
::::::
:::::
::::
:::

::: component {"id":"pj-footer","props":{"ref":"footer"}}
:::
