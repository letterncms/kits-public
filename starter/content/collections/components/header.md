---
id: 01m7bf0hdp581k5svex4atn8dw
title: Header
status: published
published_at: '2026-11-13T22:03:53+00:00'
position: 1
category: Site
description: 'The site name, the main menu, sign in once the site has public accounts, and a full-screen menu on phones.'
---

::: box {"id":"hd","props":{"tag":"header"},"label":"Header","style":{"base":{"position":"sticky","top":"0","zIndex":50,"backgroundColor":"token:color.background/0","transition":"background-color 300ms ease, box-shadow 300ms ease, transform 400ms cubic-bezier(.2,.8,.2,1)"},"is-scrolled":{"backgroundColor":"token:color.background/88","backdropFilter":"saturate(1.4) blur(16px)","boxShadow":"0 1px 0 token:color.foreground/8"},"is-hidden":{"transform":"translateY(-100%)"},"is-open":{"backgroundColor":"token:color.background"}},"logic":{"data":{"open":false},"on":[{"event":"keydown","mods":["window"],"key":"escape","actions":[{"do":"set","var":"open","value":"false"},{"do":"lock","on":true}]}],"states":{"open":"open"},"behaviors":{"scroll":{"threshold":24,"hide":true}}}}
:::: box {"id":"hd-bar","label":"Bar","style":{"base":{"maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","height":"4.5rem","display":"grid","gridTemplateColumns":"1fr auto","alignItems":"center","gap":"token:space.8"},"mobile":{"height":"4rem"}}}
::::: link {"id":"hd-name","props":{"url":"/"},"label":"Site name","style":{"base":{"justifySelf":"start","fontSize":"1.0625rem","fontWeight":"token:weight.semibold","letterSpacing":"-0.02em"}},"bind":{"label":"site.name"},"class":"quiet-link"}
:::::

::::: box {"id":"hd-nav","props":{"tag":"nav"},"label":"Main menu","style":{"base":{"display":"flex","alignItems":"center","gap":"token:space.8"},"mobile":{"display":"none"}},"attrs":{"aria-label":"Main"}}
:::::: repeat {"id":"hd-links","props":{"source":"menu","menu":"main","tag":"ul"},"style":{"base":{"display":"flex","alignItems":"center","gap":"token:space.8","fontSize":"0.9375rem"}}}
::::::: box {"id":"hd-item","props":{"tag":"li"}}
:::::::: link {"id":"hd-link","style":{"base":{"position":"relative","display":"inline-block","paddingBlock":"0.25rem","color":"token:color.muted","transition":"color 150ms ease"},"hover":{"color":"token:color.foreground"},"is-active":{"color":"token:color.foreground"},"after":{"content":"''","position":"absolute","left":"0","right":"0","bottom":"-0.125rem","height":"1px","backgroundColor":"currentColor","transform":"scaleX(0)","transformOrigin":"left","transition":"transform 300ms cubic-bezier(.2,.8,.2,1)"}},"bind":{"label":"item.label","url":"item.url","state:active":"item.active"}}
::::::::
:::::::
::::::

:::::: box {"id":"hd-account","label":"Account","style":{"base":{"display":"flex","alignItems":"center","fontSize":"0.9375rem"}},"bind":{"visible":"accounts"}}
::::::: link {"id":"hd-sign-in","style":{"base":{"color":"token:color.muted"},"hover":{"color":"token:color.foreground"}},"bind":{"label":"accounts.sign_in.label","url":"accounts.sign_in.url","hidden":"account"}}
:::::::

::::::: link {"id":"hd-my-account","style":{"base":{"color":"token:color.muted"},"hover":{"color":"token:color.foreground"}},"bind":{"label":"accounts.account.label","url":"accounts.account.url","visible":"account"}}
:::::::
::::::
:::::

::::: box {"id":"hd-toggle","props":{"tag":"button"},"label":"Menu button","style":{"base":{"display":"none","alignItems":"center","gap":"token:space.2","height":"2.5rem","marginRight":"-0.5rem","paddingInline":"0.5rem","fontSize":"0.9375rem","fontWeight":"token:weight.medium","borderRadius":"token:radius.full"},"mobile":{"display":"inline-flex"}},"attrs":{"aria-label":"Menu","aria-controls":"site-menu"},"logic":{"on":[{"event":"click","actions":[{"do":"toggle","var":"open"},{"do":"lock","on":true},{"do":"if","test":"open","then":[{"do":"play","node":"hd-sheet-links","motion":"open","mode":"restart"}],"else":[]}]}],"attrs":{"aria-expanded":"open"}}}
:::::: paragraph {"id":"hd-toggle-menu","props":{"text":"Menu","tag":"span"},"logic":{"show":"!open"}}
::::::

:::::: paragraph {"id":"hd-toggle-close","props":{"text":"Close","tag":"span"},"logic":{"show":"open"}}
::::::
:::::
::::

:::: box {"id":"hd-sheet","props":{"tag":"nav"},"label":"Phone menu","style":{"base":{"display":"none"},"mobile":{"display":"flex","flexDirection":"column","justifyContent":"space-between","height":"calc(100dvh - 4rem)","paddingInline":"token:space.gutter","paddingBottom":"token:space.10","backgroundColor":"token:color.background"}},"attrs":{"aria-label":"Main"},"logic":{"show":"open","transition":"fade"},"anchor":"site-menu"}
::::: repeat {"id":"hd-sheet-links","props":{"source":"menu","menu":"main","tag":"ul"},"style":{"base":{"paddingTop":"token:space.8","display":"flex","flexDirection":"column","gap":"token:space.1"}},"motion":[{"id":"open","trigger":{"type":"event"},"steps":[{"target":"children","from":{"opacity":0,"y":16},"duration":0.5,"ease":"power3.out","stagger":0.05}]}]}
:::::: box {"id":"hd-sheet-item","props":{"tag":"li"}}
::::::: link {"id":"hd-sheet-link","style":{"base":{"display":"block","paddingBlock":"0.25rem","fontSize":"token:text.4xl","lineHeight":"1.1","letterSpacing":"token:tracking.tight","fontWeight":"token:weight.medium"},"is-active":{"color":"token:color.muted"}},"bind":{"label":"item.label","url":"item.url","state:active":"item.active"}}
:::::::
::::::
:::::

::::: box {"id":"hd-sheet-foot","style":{"base":{"display":"flex","flexDirection":"column","gap":"token:space.2","fontSize":"token:text.sm","color":"token:color.muted"}}}
:::::: link {"id":"hd-sheet-sign-in","style":{"base":{"color":"token:color.foreground","fontSize":"token:text.lg"}},"bind":{"label":"accounts.sign_in.label","url":"accounts.sign_in.url","hidden":"account","visible":"accounts"}}
::::::

:::::: link {"id":"hd-sheet-my-account","style":{"base":{"color":"token:color.foreground","fontSize":"token:text.lg"}},"bind":{"label":"accounts.account.label","url":"accounts.account.url","visible":"account"}}
::::::

:::::: paragraph {"id":"hd-sheet-email","props":{"tag":"p"},"bind":{"text":"globals.studio.email"}}
::::::

:::::: paragraph {"id":"hd-sheet-hours","props":{"tag":"p"},"bind":{"text":"globals.studio.hours"}}
::::::
:::::
::::
:::
