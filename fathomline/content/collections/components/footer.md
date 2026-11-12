---
id: 01m7sh00060000000000000003
title: Footer
status: published
position: 3
synced: true
category: Components
description: 'The call to write, the site’s name, address, footer menu and the motion switch.'
---

::: box {"id":"ftr","props":{"tag":"footer"},"label":"Footer","style":{"base":{"borderTop":"1px solid token:color.border","overflow":"clip"}}}
:::: box {"id":"ftr-call","label":"Call","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","textShadow":"0 0 2px token:color.background, 0 0 5px token:color.background, 0 0 10px token:color.background, 0 0 18px token:color.background","paddingBlock":"token:space.section","display":"grid","gap":"token:space.8","justifyItems":"start"}}}
::::: paragraph {"id":"ftr-eyebrow","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.footer.eyebrow"}}
:::::

::::: heading {"id":"ftr-title","props":{"level":"2"},"style":{"base":{"fontSize":"token:text.5xl","maxWidth":"14ch"}},"bind":{"text":"globals.footer.call|raw"},"motion":[{"id":"in","trigger":{"type":"appear","start":"top 88%","once":true},"steps":[{"target":"lines","mask":true,"from":{"yPercent":105},"duration":1,"ease":"token:ease.out","stagger":0.09}]}]}
:::::

::::: buttons {"id":"ftr-actions"}
:::::: button {"id":"ftr-action","props":{"variant":"primary","size":"lg","icon":"arrow-right"},"bind":{"label":"globals.footer.action","url":"globals.footer.action_link.url"}}
::::::

:::::: button {"id":"ftr-mail","props":{"variant":"secondary","size":"lg"},"bind":{"label":"globals.footer.email","url":"mailto:{globals.footer.email}"}}
::::::
:::::
::::

:::: box {"id":"ftr-mark-wrap","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter"}},"attrs":{"aria-hidden":"true"}}
::::: paragraph {"id":"ftr-mark","props":{"tag":"div"},"style":{"base":{"fontSize":"clamp(3.5rem, 17.6vw, 19rem)","lineHeight":"0.8","letterSpacing":"-0.06em","fontWeight":"token:weight.medium","whiteSpace":"nowrap","paddingBottom":"0.08em","userSelect":"none"}},"bind":{"text":"site.name"},"motion":[{"id":"in","trigger":{"type":"appear","start":"top 96%","once":true},"steps":[{"target":"chars","mask":true,"from":{"yPercent":100},"duration":1.1,"ease":"token:ease.out","stagger":0.035}]}]}
:::::
::::

:::: box {"id":"ftr-base","label":"Base","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","textShadow":"0 0 2px token:color.background, 0 0 5px token:color.background, 0 0 10px token:color.background, 0 0 18px token:color.background","paddingBlock":"token:space.8","display":"grid","gridTemplateColumns":"1.4fr 1fr 1fr auto","gap":"token:space.8","alignItems":"start","fontSize":"token:text.sm","borderTop":"1px solid token:color.border"},"tablet":{"gridTemplateColumns":"1fr 1fr"},"mobile":{"gridTemplateColumns":"1fr"}}}
::::: box {"id":"ftr-office","style":{"base":{"display":"grid","gap":"token:space.2"}}}
:::::: paragraph {"id":"ftr-office-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.office"}}
::::::

:::::: paragraph {"id":"ftr-address","style":{"base":{"maxWidth":"24ch"}},"bind":{"text":"globals.footer.address|raw"}}
::::::
:::::

::::: box {"id":"ftr-nav","props":{"tag":"nav"},"style":{"base":{"display":"grid","gap":"token:space.2"}},"attrs":{"aria-label":"Footer"}}
:::::: paragraph {"id":"ftr-nav-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.pages"}}
::::::

:::::: repeat {"id":"ftr-links","props":{"source":"menu","menu":"footer","tag":"ul"},"style":{"base":{"display":"grid","gap":"token:space.1"}}}
::::::: box {"id":"ftr-item","props":{"tag":"li"}}
:::::::: link {"id":"ftr-link","style":{"base":{"display":"inline-block","paddingBlock":"token:space.1"}},"bind":{"label":"item.label","url":"item.url"},"class":"rule"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"ftr-colophon","style":{"base":{"display":"grid","gap":"token:space.2"}}}
:::::: paragraph {"id":"ftr-colophon-l","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"globals.labels.colophon"}}
::::::

:::::: paragraph {"id":"ftr-tagline","style":{"base":{"color":"token:color.muted","maxWidth":"30ch"}},"bind":{"text":"globals.footer.tagline","visible":"globals.footer.tagline"}}
::::::
:::::

::::: box {"id":"ftr-end","style":{"base":{"display":"grid","gap":"token:space.3","justifyItems":"end"},"tablet":{"justifyItems":"start"}}}
:::::: motion-toggle {"id":"ftr-motion","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.foreground","lineHeight":"1.4","paddingBlock":"token:space.3","paddingInline":"token:space.4","border":"1px solid token:color.border","borderRadius":"token:radius.full","minHeight":"44px"},"hover":{"borderColor":"token:color.foreground"}},"bind":{"pause_label":"globals.labels.pause","play_label":"globals.labels.play"}}
::::::

:::::: paragraph {"id":"ftr-copy","style":{"base":{"color":"token:color.muted"}},"bind":{"text":"© {site.year} {site.name}"}}
::::::
:::::
::::
:::
