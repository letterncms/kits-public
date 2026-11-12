---
id: 01m7sh00050000000000000006
title: Topic
status: published
position: 5
description: 'A topic’s page: the surveys and journal entries filed under it.'
collections:
  - topics
---

::: component {"id":"k-field","props":{"ref":"field"}}
:::

::: component {"id":"k-header","props":{"ref":"header"}}
:::

::: box {"id":"k-main","props":{"tag":"main"},"label":"Topic","anchor":"main"}
:::: box {"id":"k-head","props":{"tag":"header"},"label":"Head","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","textShadow":"0 0 2px token:color.background, 0 0 5px token:color.background, 0 0 10px token:color.background, 0 0 18px token:color.background","minHeight":"56svh","display":"grid","alignContent":"end","gap":"token:space.6","paddingTop":"token:space.24","paddingBottom":"token:space.12"}},"behavior":{"module":"cue","props":{"layer":"page","seed":13.1,"relief":1.2,"density":1.1,"tilt":0.5}}}
::::: paragraph {"id":"k-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.filed_under"}}
:::::

::::: heading {"id":"k-title","props":{"level":"1"},"style":{"base":{"fontSize":"token:text.display"}},"bind":{"text":"entry.title"},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"chars","mask":true,"from":{"yPercent":110},"duration":1.1,"ease":"token:ease.out","stagger":0.018}]}]}
:::::

::::: paragraph {"id":"k-text","style":{"base":{"fontSize":"token:text.xl","lineHeight":"token:leading.snug","letterSpacing":"token:tracking.tight","maxWidth":"32ch"}},"bind":{"text":"entry.description","visible":"entry.description"},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"self","from":{"opacity":0,"y":18},"duration":0.9,"delay":0.2,"ease":"token:ease.out"}]}]}
:::::
::::

:::: box {"id":"k-sheet","label":"Filed here","style":{"base":{"backgroundColor":"token:color.background","borderTop":"1px solid token:color.border"}}}
::::: box {"id":"k-in","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingBlock":"token:space.section","display":"grid","gap":"token:space.16"}}}
:::::: box {"id":"k-surveys","props":{"tag":"section"},"style":{"base":{"display":"grid","gap":"token:space.6"}}}
::::::: heading {"id":"k-surveys-t","props":{"level":"2"},"style":{"base":{"fontSize":"token:text.2xl"}},"bind":{"text":"globals.labels.surveys"}}
:::::::

::::::: repeat {"id":"k-surveys-list","props":{"source":"entries","collection":"surveys","references":"current","sort":"position","limit":50,"tag":"ul"},"style":{"base":{"borderBottom":"1px solid token:color.border"}},"behavior":{"module":"rows"}}
:::::::: box {"id":"ks-item","props":{"tag":"li"},"style":{"base":{"borderTop":"1px solid token:color.border"}}}
::::::::: box {"id":"ks-link","style":{"base":{"display":"grid","gridTemplateColumns":"5.5rem minmax(0, 1.6fr) minmax(0, 1fr) 7rem 4rem 1.5rem","alignItems":"baseline","gap":"token:space.6","paddingBlock":"token:space.6","transition":"padding 500ms cubic-bezier(0.16, 1, 0.3, 1), color 300ms ease"},"mobile":{"gridTemplateColumns":"minmax(0, 1fr) auto","gap":"token:space.2","paddingBlock":"token:space.4"},"hover":{"paddingInline":"token:space.4","color":"token:color.primary"},"focus-visible":{"paddingInline":"token:space.4","color":"token:color.primary"}},"bind":{"link":"item.url","attr:data-seed":"item.seed","attr:data-relief":"item.relief","attr:data-density":"item.density","attr:data-tilt":"item.tilt"}}
:::::::::: paragraph {"id":"ks-sheet","props":{"tag":"span"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"},"mobile":{"display":"none"}},"bind":{"text":"item.sheet"}}
::::::::::

:::::::::: heading {"id":"ks-title","props":{"level":"3"},"style":{"base":{"fontSize":"token:text.3xl","letterSpacing":"token:tracking.display","lineHeight":"token:leading.tight","fontWeight":"token:weight.medium"}},"bind":{"text":"item.title"}}
::::::::::

:::::::::: paragraph {"id":"ks-client","props":{"tag":"span"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"},"mobile":{"display":"none"}},"bind":{"text":"item.client"}}
::::::::::

:::::::::: paragraph {"id":"ks-kind","props":{"tag":"span"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"inherit","lineHeight":"1.4"}},"bind":{"text":"item.discipline"}}
::::::::::

:::::::::: paragraph {"id":"ks-year","props":{"tag":"span"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4","textAlign":"right"},"mobile":{"display":"none"}},"bind":{"text":"item.year"}}
::::::::::

:::::::::: icon {"id":"ks-arrow","props":{"icon":"arrow-up-right"},"style":{"base":{"width":"20px","height":"20px","alignSelf":"center"},"mobile":{"display":"none"}}}
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"k-notes","props":{"tag":"section"},"style":{"base":{"display":"grid","gap":"token:space.6"}}}
::::::: heading {"id":"k-notes-t","props":{"level":"2"},"style":{"base":{"fontSize":"token:text.2xl"}},"bind":{"text":"globals.labels.journal"}}
:::::::

::::::: repeat {"id":"k-notes-list","props":{"source":"entries","collection":"journal","references":"current","sort":"-published_at","limit":50,"tag":"ul"},"style":{"base":{"borderBottom":"1px solid token:color.border"}}}
:::::::: box {"id":"kn-item","props":{"tag":"li"},"style":{"base":{"borderTop":"1px solid token:color.border"}}}
::::::::: box {"id":"kn-link","style":{"base":{"display":"grid","gridTemplateColumns":"9rem minmax(0, 1.4fr) minmax(0, 1fr)","alignItems":"baseline","gap":"token:space.6","paddingBlock":"token:space.6","transition":"padding 500ms cubic-bezier(0.16, 1, 0.3, 1), color 300ms ease"},"mobile":{"gridTemplateColumns":"1fr","gap":"token:space.2","paddingBlock":"token:space.4"},"hover":{"paddingInline":"token:space.4","color":"token:color.primary"},"focus-visible":{"paddingInline":"token:space.4","color":"token:color.primary"}},"bind":{"link":"item.url"}}
:::::::::: paragraph {"id":"kn-date","props":{"tag":"time"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"item.date|date:j M Y"}}
::::::::::

:::::::::: heading {"id":"kn-title","props":{"level":"3"},"style":{"base":{"fontSize":"token:text.2xl","letterSpacing":"token:tracking.display","lineHeight":"token:leading.tight","fontWeight":"token:weight.medium"}},"bind":{"text":"item.title"}}
::::::::::

:::::::::: paragraph {"id":"kn-text","style":{"base":{"color":"token:color.muted"}},"bind":{"text":"item.summary"}}
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: component {"id":"k-footer","props":{"ref":"footer"}}
:::
