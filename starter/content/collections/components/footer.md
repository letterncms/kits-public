---
id: 01m7bf0hdp581k5svex4atn8dx
title: Footer
status: published
published_at: '2026-11-13T22:03:53+00:00'
position: 2
category: Site
description: 'An invitation, the studio’s address, how to get in touch, the footer menu and the small print, on a dark band.'
---

::: box {"id":"ft","props":{"tag":"footer"},"label":"Footer","style":{"base":{"paddingTop":"token:space.section","paddingBottom":"token:space.8"}},"class":"band"}
:::: box {"id":"ft-in","style":{"base":{"maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","display":"flex","flexDirection":"column","gap":"token:space.block"}}}
::::: box {"id":"ft-top","label":"Invitation","style":{"base":{"display":"grid","gridTemplateColumns":"minmax(0,8fr) minmax(0,4fr)","gap":"token:space.8","alignItems":"end"},"tablet":{"gridTemplateColumns":"minmax(0,1fr)"}}}
:::::: heading {"id":"ft-title","props":{"text":"Come and see <em>the workshop</em>.","level":"2"},"style":{"base":{"fontSize":"token:text.6xl","lineHeight":"token:leading.display","letterSpacing":"token:tracking.display","maxWidth":"12em","color":"inherit"}}}
::::::

:::::: buttons {"id":"ft-actions","props":{"justify":"end"},"style":{"tablet":{"justifyContent":"flex-start"}}}
::::::: button {"id":"ft-visit","props":{"label":"Plan a visit","url":"entry:01m7bf0hdtbd9d9d33m5gp91ew","variant":"primary","size":"lg","icon":"arrow-right","icon_position":"end"}}
:::::::
::::::
:::::

::::: box {"id":"ft-grid","label":"Details","style":{"base":{"display":"grid","gridTemplateColumns":"repeat(4,minmax(0,1fr))","gap":"token:space.8","paddingTop":"token:space.10","borderTop":"1px solid token:color.border","fontSize":"0.9375rem","lineHeight":"1.6"},"tablet":{"gridTemplateColumns":"repeat(2,minmax(0,1fr))"},"mobile":{"gridTemplateColumns":"minmax(0,1fr)"}}}
:::::: box {"id":"ft-about","style":{"base":{"display":"flex","flexDirection":"column","gap":"token:space.2"}}}
::::::: link {"id":"ft-name","props":{"url":"/"},"style":{"base":{"fontSize":"1.0625rem","fontWeight":"token:weight.semibold","letterSpacing":"-0.02em","color":"inherit"}},"bind":{"label":"site.name"}}
:::::::

::::::: paragraph {"id":"ft-tagline","props":{"tag":"p"},"style":{"base":{"color":"token:color.muted","maxWidth":"18rem"}},"bind":{"text":"globals.studio.tagline"}}
:::::::
::::::

:::::: box {"id":"ft-visit-us","style":{"base":{"display":"flex","flexDirection":"column","gap":"token:space.2"}}}
::::::: paragraph {"id":"ft-visit-label","props":{"text":"Visit","tag":"p"},"style":{"base":{"color":"token:color.muted"}}}
:::::::

::::::: paragraph {"id":"ft-address","props":{"tag":"p"},"style":{"base":{"whiteSpace":"pre-line"}},"bind":{"text":"globals.studio.address"}}
:::::::

::::::: paragraph {"id":"ft-hours","props":{"tag":"p"},"style":{"base":{"color":"token:color.muted"}},"bind":{"text":"globals.studio.hours"}}
:::::::
::::::

:::::: box {"id":"ft-contact","style":{"base":{"display":"flex","flexDirection":"column","gap":"token:space.2"}}}
::::::: paragraph {"id":"ft-contact-label","props":{"text":"Get in touch","tag":"p"},"style":{"base":{"color":"token:color.muted"}}}
:::::::

::::::: link {"id":"ft-email","style":{"base":{"color":"inherit"}},"bind":{"label":"globals.studio.email","url":"mailto:{globals.studio.email}"}}
:::::::

::::::: paragraph {"id":"ft-phone","props":{"tag":"p"},"bind":{"text":"globals.studio.phone"}}
:::::::

::::::: link {"id":"ft-instagram","props":{"label":"Instagram","new_tab":true},"style":{"base":{"color":"inherit"}},"bind":{"url":"globals.studio.instagram","visible":"globals.studio.instagram"}}
:::::::
::::::

:::::: box {"id":"ft-menu","props":{"tag":"nav"},"style":{"base":{"display":"flex","flexDirection":"column","gap":"token:space.2"}},"attrs":{"aria-label":"Footer"}}
::::::: paragraph {"id":"ft-menu-label","props":{"text":"Explore","tag":"p"},"style":{"base":{"color":"token:color.muted"}}}
:::::::

::::::: repeat {"id":"ft-links","props":{"source":"menu","menu":"footer","tag":"ul"},"style":{"base":{"display":"flex","flexDirection":"column","gap":"token:space.1"}}}
:::::::: box {"id":"ft-link-item","props":{"tag":"li"}}
::::::::: link {"id":"ft-link","style":{"base":{"color":"inherit"}},"bind":{"label":"item.label","url":"item.url"}}
:::::::::
::::::::
:::::::
::::::
:::::

::::: box {"id":"ft-small","label":"Small print","style":{"base":{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","gap":"token:space.4","fontSize":"token:text.sm","color":"token:color.muted"}}}
:::::: paragraph {"id":"ft-copy","props":{"tag":"p"},"bind":{"text":"© {site.year} {site.name}"}}
::::::

:::::: link {"id":"ft-made","props":{"label":"Made with Lettern","url":"https://lettern.org","new_tab":true},"style":{"base":{"color":"inherit"},"hover":{"color":"token:color.foreground"}}}
::::::
:::::
::::
:::
