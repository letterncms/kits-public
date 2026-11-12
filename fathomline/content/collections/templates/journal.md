---
id: 01m7sh00050000000000000005
title: 'Journal entry'
status: published
position: 4
description: 'A note or a field report: date, topics, title, picture and text.'
collections:
  - journal
---

::: component {"id":"j-field","props":{"ref":"field"}}
:::

::: component {"id":"j-header","props":{"ref":"header"}}
:::

::: box {"id":"j-main","props":{"tag":"main"},"label":"Journal entry","anchor":"main"}
:::: box {"id":"j-head","props":{"tag":"header"},"label":"Head","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","textShadow":"0 0 2px token:color.background, 0 0 5px token:color.background, 0 0 10px token:color.background, 0 0 18px token:color.background","minHeight":"64svh","display":"grid","alignContent":"end","gap":"token:space.6","paddingTop":"token:space.24","paddingBottom":"token:space.12"}},"behavior":{"module":"cue","props":{"layer":"page","seed":11.3,"relief":0.6,"density":0.8,"tilt":0.3,"ink":0.8}}}
::::: box {"id":"j-kicker","style":{"base":{"display":"flex","flexWrap":"wrap","gap":"token:space.6"}}}
:::::: paragraph {"id":"j-date","props":{"tag":"time"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"entry.date|date:j F Y"}}
::::::

:::::: repeat {"id":"j-topics","props":{"source":"list","path":"entry.topics","tag":"ul","as":"topic"},"style":{"base":{"display":"flex","gap":"token:space.4"}}}
::::::: box {"id":"j-topic","props":{"tag":"li"}}
:::::::: link {"id":"j-topic-link","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.primary","lineHeight":"1.4"}},"bind":{"label":"topic.title","url":"topic.url"},"class":"rule"}
::::::::
:::::::
::::::
:::::

::::: heading {"id":"j-title","props":{"level":"1"},"style":{"base":{"fontSize":"token:text.5xl","maxWidth":"16ch"}},"bind":{"text":"entry.title"},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"chars","mask":true,"from":{"yPercent":110},"duration":1.1,"ease":"token:ease.out","stagger":0.018}]}]}
:::::

::::: paragraph {"id":"j-summary","style":{"base":{"fontSize":"token:text.xl","lineHeight":"token:leading.snug","letterSpacing":"token:tracking.tight","maxWidth":"34ch"}},"bind":{"text":"entry.summary"},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"self","from":{"opacity":0,"y":18},"duration":0.9,"delay":0.2,"ease":"token:ease.out"}]}]}
:::::
::::

:::: box {"id":"j-sheet","label":"Sheet","style":{"base":{"backgroundColor":"token:color.background","borderTop":"1px solid token:color.border"}}}
::::: box {"id":"j-body","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","display":"grid","gridTemplateColumns":"minmax(0, 1fr) minmax(0, 2fr)","gap":"token:space.16","paddingBlock":"token:space.section"},"tablet":{"gridTemplateColumns":"1fr","gap":"token:space.12"}}}
:::::: box {"id":"j-facts","props":{"tag":"aside"},"style":{"base":{"display":"grid","gap":"token:space.6","alignContent":"start"},"tablet":{"gridTemplateColumns":"1fr 1fr"}}}
::::::: box {"id":"j-f1","style":{"base":{"display":"grid","gap":"token:space.1","paddingTop":"token:space.3","borderTop":"1px solid token:color.border"}},"bind":{"visible":"entry.station"}}
:::::::: paragraph {"id":"j-f1-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.station"}}
::::::::

:::::::: paragraph {"id":"j-f1-v","style":{"base":{"fontSize":"token:text.lg","letterSpacing":"token:tracking.tight"}},"bind":{"text":"entry.station"}}
::::::::
:::::::

::::::: box {"id":"j-f2","style":{"base":{"display":"grid","gap":"token:space.1","paddingTop":"token:space.3","borderTop":"1px solid token:color.border"}},"bind":{"visible":"entry.gust_text"}}
:::::::: paragraph {"id":"j-f2-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.gust"}}
::::::::

:::::::: paragraph {"id":"j-f2-v","style":{"base":{"fontSize":"token:text.lg","letterSpacing":"token:tracking.tight"}},"bind":{"text":"entry.gust_text"}}
::::::::
:::::::

::::::: box {"id":"j-f3","style":{"base":{"display":"grid","gap":"token:space.1","paddingTop":"token:space.3","borderTop":"1px solid token:color.border"}},"bind":{"visible":"entry.instrument"}}
:::::::: paragraph {"id":"j-f3-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.instrument"}}
::::::::

:::::::: paragraph {"id":"j-f3-v","style":{"base":{"fontSize":"token:text.lg","letterSpacing":"token:tracking.tight"}},"bind":{"text":"entry.instrument"}}
::::::::
:::::::

::::::: box {"id":"j-f4","style":{"base":{"display":"grid","gap":"token:space.1","paddingTop":"token:space.3","borderTop":"1px solid token:color.border"}},"bind":{"visible":"entry.survey"}}
:::::::: paragraph {"id":"j-f4-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.survey"}}
::::::::

:::::::: link {"id":"j-f4-v","style":{"base":{"fontSize":"token:text.lg","letterSpacing":"token:tracking.tight","justifySelf":"start"}},"bind":{"label":"entry.survey.title","url":"entry.survey.url"},"class":"rule"}
::::::::
:::::::
::::::

:::::: box {"id":"j-report","style":{"base":{"display":"grid","gap":"token:space.12","alignContent":"start","maxWidth":"token:container.prose"}}}
::::::: image {"id":"j-cover","props":{"sizes":"(min-width: 64rem) 40rem, 92vw"},"style":{"base":{"borderRadius":"token:radius.md","overflow":"clip","border":"1px solid token:color.border"}},"bind":{"image":"entry.cover","visible":"entry.cover"}}
:::::::

::::::: outlet {"id":"j-outlet","props":{"wrap":true,"prose":true},"style":{"base":{"fontSize":"token:text.lg"}}}
:::::::
::::::
:::::
::::

:::: box {"id":"j-more","props":{"tag":"nav"},"label":"Previous and next","style":{"base":{"backgroundColor":"token:color.background","borderTop":"1px solid token:color.border"}},"bind":{"attr:aria-label":"{globals.labels.previous} / {globals.labels.next}"}}
::::: box {"id":"j-more-in","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingBlock":"token:space.section","display":"grid","gridTemplateColumns":"minmax(0, 1fr) minmax(0, 1fr)","alignItems":"start","gap":"token:space.12"},"mobile":{"gridTemplateColumns":"1fr"}},"behavior":{"module":"rows"}}
:::::: repeat {"id":"j-previous","props":{"source":"neighbors","show":"previous","wrap":true},"style":{"base":{"display":"grid"}}}
::::::: box {"id":"j-previous-link","style":{"base":{"display":"grid","gap":"token:space.3","paddingBlock":"token:space.4","transition":"color 300ms ease"},"hover":{"color":"token:color.primary"},"focus-visible":{"color":"token:color.primary"}},"bind":{"link":"item.url","attr:data-seed":"item.seed","attr:data-relief":"item.relief","attr:data-density":"item.density","attr:data-tilt":"item.tilt"}}
:::::::: box {"id":"j-previous-kicker","style":{"base":{"display":"flex","alignItems":"center","gap":"token:space.2"}}}
::::::::: icon {"id":"j-previous-icon","props":{"icon":"arrow-left"},"style":{"base":{"width":"16px","height":"16px","color":"token:color.muted"}}}
:::::::::

::::::::: paragraph {"id":"j-previous-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.previous"}}
:::::::::
::::::::

:::::::: heading {"id":"j-previous-title","props":{"level":"2"},"style":{"base":{"fontSize":"token:text.4xl"}},"bind":{"text":"item.title"}}
::::::::
:::::::
::::::

:::::: repeat {"id":"j-next","props":{"source":"neighbors","show":"next","wrap":true},"style":{"base":{"display":"grid","justifyItems":"end","textAlign":"right"},"mobile":{"justifyItems":"start","textAlign":"left"}}}
::::::: box {"id":"j-next-link","style":{"base":{"display":"grid","gap":"token:space.3","paddingBlock":"token:space.4","transition":"color 300ms ease","justifyItems":"end"},"mobile":{"justifyItems":"start"},"hover":{"color":"token:color.primary"},"focus-visible":{"color":"token:color.primary"}},"bind":{"link":"item.url","attr:data-seed":"item.seed","attr:data-relief":"item.relief","attr:data-density":"item.density","attr:data-tilt":"item.tilt"}}
:::::::: box {"id":"j-next-kicker","style":{"base":{"display":"flex","alignItems":"center","gap":"token:space.2"}}}
::::::::: icon {"id":"j-next-icon","props":{"icon":"arrow-right"},"style":{"base":{"width":"16px","height":"16px","color":"token:color.muted","order":2}}}
:::::::::

::::::::: paragraph {"id":"j-next-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.next"}}
:::::::::
::::::::

:::::::: heading {"id":"j-next-title","props":{"level":"2"},"style":{"base":{"fontSize":"token:text.4xl"}},"bind":{"text":"item.title"}}
::::::::
:::::::
::::::
:::::
::::
:::

::: component {"id":"j-footer","props":{"ref":"footer"}}
:::
