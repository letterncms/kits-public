---
id: 01m7sh00010000000000000002
title: Surveys
status: published
published_at: '2026-11-01T12:00:00+00:00'
position: 1
---

::: box {"id":"idx-head","props":{"tag":"section"},"label":"Head","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","textShadow":"0 0 2px token:color.background, 0 0 5px token:color.background, 0 0 10px token:color.background, 0 0 18px token:color.background","minHeight":"62svh","display":"grid","alignContent":"end","gap":"token:space.6","paddingTop":"token:space.24","paddingBottom":"token:space.12"}},"behavior":{"module":"cue","props":{"layer":"page","seed":6.3,"relief":0.8,"density":1.4,"tilt":0.05}}}
:::: paragraph {"id":"idx-l","props":{"text":"Index of sheets — 2021 to 2026"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"self","from":{"opacity":0,"y":18},"duration":0.9,"delay":0.05,"ease":"token:ease.out"}]}]}
::::

:::: heading {"id":"idx-title","props":{"level":"1","text":"Surveys <em>in print</em>"},"style":{"base":{"fontSize":"token:text.display","maxWidth":"14ch"}},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"chars","mask":true,"from":{"yPercent":110},"duration":1.1,"ease":"token:ease.out","stagger":0.018}]}]}
::::

:::: paragraph {"id":"idx-text","props":{"text":"Six recent commissions. Rest on a line and the field behind it becomes that survey’s ground."},"style":{"base":{"fontSize":"token:text.lg","maxWidth":"38ch","letterSpacing":"token:tracking.tight"}},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"self","from":{"opacity":0,"y":18},"duration":0.9,"delay":0.2,"ease":"token:ease.out"}]}]}
::::
:::

::: box {"id":"idx-sheet","props":{"tag":"section"},"label":"Index","style":{"base":{"backgroundColor":"token:color.background","borderTop":"1px solid token:color.border"}}}
:::: list-filter {"id":"idx-filter","props":{"status":":count of :total surveys"},"style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingTop":"token:space.12","paddingBottom":"token:space.section","display":"grid","gap":"token:space.8"}}}
::::: filter-choice {"id":"idx-choice","props":{"facet":"discipline","label":"Discipline","all_label":"All","look":"chips"}}
:::::

::::: repeat {"id":"idx-list","props":{"source":"entries","collection":"surveys","sort":"position","limit":50,"tag":"ul","filter_by":"item.discipline"},"style":{"base":{"borderBottom":"1px solid token:color.border"}},"behavior":{"module":"rows"}}
:::::: box {"id":"idx-item","props":{"tag":"li"},"style":{"base":{"borderTop":"1px solid token:color.border"}}}
::::::: box {"id":"idx-link","style":{"base":{"display":"grid","gridTemplateColumns":"5.5rem minmax(0, 1.6fr) minmax(0, 1fr) 7rem 4rem 1.5rem","alignItems":"baseline","gap":"token:space.6","paddingBlock":"token:space.6","transition":"padding 500ms cubic-bezier(0.16, 1, 0.3, 1), color 300ms ease"},"mobile":{"gridTemplateColumns":"minmax(0, 1fr) auto","gap":"token:space.2","paddingBlock":"token:space.4"},"hover":{"paddingInline":"token:space.4","color":"token:color.primary"},"focus-visible":{"paddingInline":"token:space.4","color":"token:color.primary"}},"bind":{"link":"item.url","attr:data-seed":"item.seed","attr:data-relief":"item.relief","attr:data-density":"item.density","attr:data-tilt":"item.tilt"}}
:::::::: paragraph {"id":"idx-sheet","props":{"tag":"span"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"},"mobile":{"display":"none"}},"bind":{"text":"item.sheet"}}
::::::::

:::::::: heading {"id":"idx-title","props":{"level":"2"},"style":{"base":{"fontSize":"token:text.3xl","letterSpacing":"token:tracking.display","lineHeight":"token:leading.tight","fontWeight":"token:weight.medium"}},"bind":{"text":"item.title"}}
::::::::

:::::::: paragraph {"id":"idx-client","props":{"tag":"span"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"},"mobile":{"display":"none"}},"bind":{"text":"item.client"}}
::::::::

:::::::: paragraph {"id":"idx-kind","props":{"tag":"span"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"inherit","lineHeight":"1.4"}},"bind":{"text":"item.discipline"}}
::::::::

:::::::: paragraph {"id":"idx-year","props":{"tag":"span"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4","textAlign":"right"},"mobile":{"display":"none"}},"bind":{"text":"item.year"}}
::::::::

:::::::: icon {"id":"idx-arrow","props":{"icon":"arrow-up-right"},"style":{"base":{"width":"20px","height":"20px","alignSelf":"center"},"mobile":{"display":"none"}}}
::::::::
:::::::
::::::
:::::

::::: filter-empty {"id":"idx-empty"}
:::::: paragraph {"id":"idx-none","props":{"text":"No survey of that kind is in print yet."},"style":{"base":{"color":"token:color.muted"}}}
::::::
:::::
::::
:::
