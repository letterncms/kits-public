---
id: 01m7sh00050000000000000004
title: Survey
status: published
position: 3
description: 'One survey: its ground in the field, its facts, its report and its plate.'
collections:
  - surveys
---

::: component {"id":"s-field","props":{"ref":"field"}}
:::

::: component {"id":"s-header","props":{"ref":"header"}}
:::

::: box {"id":"s-main","props":{"tag":"main"},"label":"Survey","anchor":"main"}
:::: box {"id":"s-head","props":{"tag":"header"},"label":"Head","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","textShadow":"0 0 2px token:color.background, 0 0 5px token:color.background, 0 0 10px token:color.background, 0 0 18px token:color.background","minHeight":"92svh","display":"grid","alignContent":"end","gap":"token:space.8","paddingTop":"token:space.24","paddingBottom":"token:space.12"}},"behavior":{"module":"cue","props":{"layer":"page","seed":"{entry.seed}","relief":"{entry.relief}","density":"{entry.density}","tilt":"{entry.tilt}"}}}
::::: box {"id":"s-kicker","style":{"base":{"display":"flex","flexWrap":"wrap","gap":"token:space.6"}}}
:::::: paragraph {"id":"s-sheet","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"{globals.labels.sheet} {entry.sheet}"}}
::::::

:::::: paragraph {"id":"s-kind","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.primary","lineHeight":"1.4"}},"bind":{"text":"entry.discipline"}}
::::::
:::::

::::: heading {"id":"s-title","props":{"level":"1"},"style":{"base":{"fontSize":"token:text.display","maxWidth":"12ch"}},"bind":{"text":"entry.title"},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"chars","mask":true,"from":{"yPercent":110},"duration":1,"ease":"token:ease.out","stagger":0.02}]}]}
:::::

::::: paragraph {"id":"s-summary","style":{"base":{"fontSize":"token:text.xl","lineHeight":"token:leading.snug","letterSpacing":"token:tracking.tight","maxWidth":"32ch"}},"bind":{"text":"entry.summary"},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"self","from":{"opacity":0,"y":18},"duration":0.9,"delay":0.2,"ease":"token:ease.out"}]}]}
:::::
::::

:::: box {"id":"s-sheet-wrap","label":"Sheet","style":{"base":{"backgroundColor":"token:color.background","borderTop":"1px solid token:color.border"}}}
::::: box {"id":"s-body","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","display":"grid","gridTemplateColumns":"minmax(0, 1fr) minmax(0, 2fr)","gap":"token:space.16","paddingBlock":"token:space.section"},"tablet":{"gridTemplateColumns":"1fr","gap":"token:space.12"}}}
:::::: box {"id":"s-facts","props":{"tag":"aside"},"style":{"base":{"display":"grid","gap":"token:space.6","alignContent":"start","position":"sticky","top":"104px","alignSelf":"start"},"tablet":{"position":"static","gridTemplateColumns":"1fr 1fr"}}}
::::::: box {"id":"s-f1","style":{"base":{"display":"grid","gap":"token:space.1","paddingTop":"token:space.3","borderTop":"1px solid token:color.border"}},"bind":{"visible":"entry.client"}}
:::::::: paragraph {"id":"s-f1-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.client"}}
::::::::

:::::::: paragraph {"id":"s-f1-v","style":{"base":{"fontSize":"token:text.lg","letterSpacing":"token:tracking.tight"}},"bind":{"text":"entry.client"}}
::::::::
:::::::

::::::: box {"id":"s-f2","style":{"base":{"display":"grid","gap":"token:space.1","paddingTop":"token:space.3","borderTop":"1px solid token:color.border"}},"bind":{"visible":"entry.place"}}
:::::::: paragraph {"id":"s-f2-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.place"}}
::::::::

:::::::: paragraph {"id":"s-f2-v","style":{"base":{"fontSize":"token:text.lg","letterSpacing":"token:tracking.tight"}},"bind":{"text":"entry.place"}}
::::::::
:::::::

::::::: box {"id":"s-f3","style":{"base":{"display":"grid","gap":"token:space.1","paddingTop":"token:space.3","borderTop":"1px solid token:color.border"}},"bind":{"visible":"entry.position_text"}}
:::::::: paragraph {"id":"s-f3-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.position"}}
::::::::

:::::::: paragraph {"id":"s-f3-v","style":{"base":{"fontSize":"token:text.lg","letterSpacing":"token:tracking.tight"}},"bind":{"text":"entry.position_text"}}
::::::::
:::::::

::::::: box {"id":"s-f4","style":{"base":{"display":"grid","gap":"token:space.1","paddingTop":"token:space.3","borderTop":"1px solid token:color.border"}},"bind":{"visible":"entry.scale"}}
:::::::: paragraph {"id":"s-f4-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.scale"}}
::::::::

:::::::: paragraph {"id":"s-f4-v","style":{"base":{"fontSize":"token:text.lg","letterSpacing":"token:tracking.tight"}},"bind":{"text":"entry.scale"}}
::::::::
:::::::

::::::: box {"id":"s-f5","style":{"base":{"display":"grid","gap":"token:space.1","paddingTop":"token:space.3","borderTop":"1px solid token:color.border"}},"bind":{"visible":"entry.year"}}
:::::::: paragraph {"id":"s-f5-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.year"}}
::::::::

:::::::: paragraph {"id":"s-f5-v","style":{"base":{"fontSize":"token:text.lg","letterSpacing":"token:tracking.tight"}},"bind":{"text":"entry.year"}}
::::::::
:::::::

::::::: box {"id":"s-files","style":{"base":{"display":"grid","gap":"token:space.2","paddingTop":"token:space.3","borderTop":"1px solid token:color.border"}},"bind":{"visible":"entry.downloads"}}
:::::::: paragraph {"id":"s-files-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.downloads"}}
::::::::

:::::::: repeat {"id":"s-files-list","props":{"source":"list","path":"entry.downloads","tag":"ul","as":"file"},"style":{"base":{"display":"grid","gap":"token:space.1"}}}
::::::::: box {"id":"s-file","props":{"tag":"li"}}
:::::::::: link {"id":"s-file-link","props":{"new_tab":true},"style":{"base":{"display":"inline-block","paddingBlock":"token:space.1"}},"bind":{"label":"file.name","url":"file.url"},"class":"rule"}
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"s-report","style":{"base":{"display":"grid","gap":"token:space.12","alignContent":"start","maxWidth":"token:container.prose"}}}
::::::: outlet {"id":"s-outlet","props":{"wrap":true,"prose":true},"style":{"base":{"fontSize":"token:text.lg"}}}
:::::::

::::::: image {"id":"s-plate","props":{"sizes":"(min-width: 64rem) 40rem, 92vw"},"style":{"base":{"borderRadius":"token:radius.md","overflow":"clip","border":"1px solid token:color.border"}},"bind":{"image":"entry.plate","visible":"entry.plate","caption":"{globals.labels.plate} {entry.sheet}"}}
:::::::
::::::
:::::
::::

:::: box {"id":"s-more","props":{"tag":"nav"},"label":"Previous and next","style":{"base":{"backgroundColor":"token:color.background","borderTop":"1px solid token:color.border"}},"bind":{"attr:aria-label":"{globals.labels.previous} / {globals.labels.next}"}}
::::: box {"id":"s-more-in","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingBlock":"token:space.section","display":"grid","gridTemplateColumns":"minmax(0, 1fr) minmax(0, 1fr)","alignItems":"start","gap":"token:space.12"},"mobile":{"gridTemplateColumns":"1fr"}},"behavior":{"module":"rows"}}
:::::: repeat {"id":"s-previous","props":{"source":"neighbors","show":"previous","wrap":true},"style":{"base":{"display":"grid"}}}
::::::: box {"id":"s-previous-link","style":{"base":{"display":"grid","gap":"token:space.3","paddingBlock":"token:space.4","transition":"color 300ms ease"},"hover":{"color":"token:color.primary"},"focus-visible":{"color":"token:color.primary"}},"bind":{"link":"item.url","attr:data-seed":"item.seed","attr:data-relief":"item.relief","attr:data-density":"item.density","attr:data-tilt":"item.tilt"}}
:::::::: box {"id":"s-previous-kicker","style":{"base":{"display":"flex","alignItems":"center","gap":"token:space.2"}}}
::::::::: icon {"id":"s-previous-icon","props":{"icon":"arrow-left"},"style":{"base":{"width":"16px","height":"16px","color":"token:color.muted"}}}
:::::::::

::::::::: paragraph {"id":"s-previous-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.previous"}}
:::::::::
::::::::

:::::::: heading {"id":"s-previous-title","props":{"level":"2"},"style":{"base":{"fontSize":"token:text.4xl"}},"bind":{"text":"item.title"}}
::::::::
:::::::
::::::

:::::: repeat {"id":"s-next","props":{"source":"neighbors","show":"next","wrap":true},"style":{"base":{"display":"grid","justifyItems":"end","textAlign":"right"},"mobile":{"justifyItems":"start","textAlign":"left"}}}
::::::: box {"id":"s-next-link","style":{"base":{"display":"grid","gap":"token:space.3","paddingBlock":"token:space.4","transition":"color 300ms ease","justifyItems":"end"},"mobile":{"justifyItems":"start"},"hover":{"color":"token:color.primary"},"focus-visible":{"color":"token:color.primary"}},"bind":{"link":"item.url","attr:data-seed":"item.seed","attr:data-relief":"item.relief","attr:data-density":"item.density","attr:data-tilt":"item.tilt"}}
:::::::: box {"id":"s-next-kicker","style":{"base":{"display":"flex","alignItems":"center","gap":"token:space.2"}}}
::::::::: icon {"id":"s-next-icon","props":{"icon":"arrow-right"},"style":{"base":{"width":"16px","height":"16px","color":"token:color.muted","order":2}}}
:::::::::

::::::::: paragraph {"id":"s-next-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.next"}}
:::::::::
::::::::

:::::::: heading {"id":"s-next-title","props":{"level":"2"},"style":{"base":{"fontSize":"token:text.4xl"}},"bind":{"text":"item.title"}}
::::::::
:::::::
::::::
:::::
::::
:::

::: component {"id":"s-footer","props":{"ref":"footer"}}
:::
