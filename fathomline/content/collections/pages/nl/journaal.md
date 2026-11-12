---
id: 01m7sh01010000000000000006
title: Journaal
status: published
published_at: '2026-11-01T12:00:00+00:00'
origin: 01m7sh00010000000000000006
position: 3
---

::: box {"id":"jnl-head","props":{"tag":"section"},"label":"Head","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","textShadow":"0 0 2px token:color.background, 0 0 5px token:color.background, 0 0 10px token:color.background, 0 0 18px token:color.background","minHeight":"62svh","display":"grid","alignContent":"end","gap":"token:space.6","paddingTop":"token:space.24","paddingBottom":"token:space.12"}},"behavior":{"module":"cue","props":{"layer":"page","seed":11.3,"relief":0.6,"density":0.8,"tilt":0.3}}}
:::: paragraph {"id":"jnl-l","props":{"text":"Journaal — notities van kantoor en boot"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"self","from":{"opacity":0,"y":18},"duration":0.9,"delay":0.05,"ease":"token:ease.out"}]}]}
::::

:::: heading {"id":"jnl-title","props":{"level":"1","text":"Veld<em>notities</em>"},"style":{"base":{"fontSize":"token:text.display","maxWidth":"14ch"}},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"chars","mask":true,"from":{"yPercent":110},"duration":1.1,"ease":"token:ease.out","stagger":0.018}]}]}
::::

:::: paragraph {"id":"jnl-text","props":{"text":"Wat we daarbuiten zagen, en wat we daardoor veranderden."},"style":{"base":{"fontSize":"token:text.lg","maxWidth":"38ch","letterSpacing":"token:tracking.tight"}},"motion":[{"id":"in","trigger":{"type":"load"},"steps":[{"target":"self","from":{"opacity":0,"y":18},"duration":0.9,"delay":0.2,"ease":"token:ease.out"}]}]}
::::
:::

::: box {"id":"jnl-sheet","props":{"tag":"section"},"label":"Entries","style":{"base":{"backgroundColor":"token:color.background","borderTop":"1px solid token:color.border"}}}
:::: box {"id":"jnl-in","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingBlock":"token:space.section"}}}
::::: repeat {"id":"jnl-list","props":{"source":"entries","collection":"journal","sort":"-published_at","limit":50,"tag":"ul"},"style":{"base":{"borderBottom":"1px solid token:color.border"}}}
:::::: box {"id":"jnl-item","props":{"tag":"li"},"style":{"base":{"borderTop":"1px solid token:color.border"}}}
::::::: box {"id":"jnl-link","style":{"base":{"display":"grid","gridTemplateColumns":"9rem minmax(0, 1.4fr) minmax(0, 1fr)","alignItems":"baseline","gap":"token:space.6","paddingBlock":"token:space.6","transition":"padding 500ms cubic-bezier(0.16, 1, 0.3, 1), color 300ms ease"},"mobile":{"gridTemplateColumns":"1fr","gap":"token:space.2","paddingBlock":"token:space.4"},"hover":{"paddingInline":"token:space.4","color":"token:color.primary"},"focus-visible":{"paddingInline":"token:space.4","color":"token:color.primary"}},"bind":{"link":"item.url"}}
:::::::: paragraph {"id":"jnl-date","props":{"tag":"time"},"style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4"}},"bind":{"text":"item.date|date:j M Y"}}
::::::::

:::::::: heading {"id":"jnl-title","props":{"level":"2"},"style":{"base":{"fontSize":"token:text.2xl","letterSpacing":"token:tracking.display","lineHeight":"token:leading.tight","fontWeight":"token:weight.medium"}},"bind":{"text":"item.title"}}
::::::::

:::::::: paragraph {"id":"jnl-text","style":{"base":{"color":"token:color.muted"}},"bind":{"text":"item.summary"}}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"jnl-letter","props":{"tag":"section"},"label":"Correction notices","style":{"base":{"backgroundColor":"token:color.background","borderTop":"1px solid token:color.border"}},"attrs":{"aria-labelledby":"#jnl-letter-title"}}
:::: box {"id":"jnl-letter-in","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingBlock":"token:space.section","display":"grid","gridTemplateColumns":"minmax(0, 1fr) minmax(0, 1fr)","gap":"token:space.16","alignItems":"start"},"tablet":{"gridTemplateColumns":"1fr","gap":"token:space.8"}}}
::::: box {"id":"jnl-letter-copy","style":{"base":{"display":"grid","gap":"token:space.4"}}}
:::::: heading {"id":"jnl-letter-title","props":{"level":"2","text":"Correctie<em>berichten</em>"},"style":{"base":{"fontSize":"token:text.3xl"}}}
::::::

:::::: paragraph {"id":"jnl-letter-text","props":{"text":"Een korte brief op de eerste maandag van de maand: welke bladen veranderden, en hoeveel."},"style":{"base":{"color":"token:color.muted","maxWidth":"36ch"}}}
::::::
:::::

::::: link {"id":"jnl-signup","props":{"label":"Vraag de berichten aan","url":"mailto:hello@fathomline.example?subject=Notices"},"style":{"base":{"fontWeight":"token:weight.medium","paddingBlock":"token:space.2","justifySelf":"start"}},"class":"rule"}
:::::
::::
:::
