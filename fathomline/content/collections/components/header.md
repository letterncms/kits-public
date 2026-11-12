---
id: 01m7sh00060000000000000002
title: Header
status: published
position: 2
synced: true
category: Components
description: 'Site name, main menu, languages, light and dark, and a menu button on phones.'
---

::: box {"id":"hdr","props":{"tag":"header"},"label":"Header","style":{"base":{"position":"sticky","top":"0","zIndex":40,"borderBottom":"1px solid transparent","transition":"border-color 300ms ease, background-color 300ms ease, backdrop-filter 300ms ease"},"is-scrolled":{"backgroundColor":"token:color.background/82","borderColor":"token:color.border","backdropFilter":"blur(14px)"},"is-open":{"backgroundColor":"token:color.background"}},"logic":{"data":{"open":false},"on":[{"event":"keydown","mods":["window"],"key":"escape","actions":[{"do":"set","var":"open","value":"false"}]}],"states":{"open":"open"},"behaviors":{"scroll":{"threshold":24,"hide":false}}}}
:::: box {"id":"hdr-bar","label":"Bar","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","display":"flex","alignItems":"center","gap":"token:space.6","height":"72px"}}}
::::: link {"id":"hdr-logo","label":"Logo","style":{"base":{"display":"inline-flex","alignItems":"center","gap":"token:space.2","fontWeight":"token:weight.semibold","letterSpacing":"token:tracking.tight","fontSize":"1.125rem","paddingBlock":"token:space.2"}},"bind":{"url":"globals.labels.home_link.url"}}
:::::: icon {"id":"hdr-mark","props":{"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"><path d=\"M3.5 13.5c0-5 3.6-9 8.6-9s8.4 3.3 8.4 7.6-3 8.4-8.2 8.4-8.800-2.400-8.800-7Z\"/><path d=\"M7.400 13c0-2.900 2-5 4.700-5s4.600 1.700 4.600 4-1.700 4.600-4.400 4.600S7.400 15.600 7.400 13Z\"/><path d=\"M11 12.600c0-.8.600-1.400 1.300-1.400s1.200.5 1.200 1.200-.5 1.300-1.200 1.300-1.300-.4-1.300-1.100Z\"/></svg>"},"style":{"base":{"width":"24px","height":"24px","color":"token:color.primary"}}}
::::::

:::::: paragraph {"id":"hdr-name","props":{"tag":"span"},"bind":{"text":"site.name"}}
::::::
:::::

::::: box {"id":"hdr-nav","props":{"tag":"nav"},"label":"Main menu","style":{"base":{"marginLeft":"auto"},"mobile":{"display":"none"}},"attrs":{"aria-label":"Main"}}
:::::: repeat {"id":"hdr-links","props":{"source":"menu","menu":"main","tag":"ul"},"style":{"base":{"display":"flex","alignItems":"center","gap":"token:space.8"}}}
::::::: box {"id":"hdr-item","props":{"tag":"li"}}
:::::::: link {"id":"hdr-link","style":{"base":{"fontSize":"token:text.sm","fontWeight":"token:weight.medium","paddingBlock":"token:space.3","display":"inline-block"},"is-active":{"color":"token:color.primary"}},"bind":{"label":"item.label","url":"item.url","state:active":"item.active"},"class":"rule"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"hdr-tongue","props":{"tag":"nav"},"label":"Languages","style":{"mobile":{"display":"none"}},"bind":{"attr:aria-label":"globals.labels.language"}}
:::::: repeat {"id":"hdr-lang","props":{"source":"languages","tag":"ul"},"style":{"base":{"display":"flex","alignItems":"center","gap":"token:space.1"}}}
::::::: box {"id":"hdr-lang-item","props":{"tag":"li"}}
:::::::: link {"id":"hdr-lang-link","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4","display":"grid","placeItems":"center","minWidth":"36px","minHeight":"44px"},"is-current":{"color":"token:color.foreground"},"hover":{"color":"token:color.foreground"}},"bind":{"label":"item.locale","url":"item.url","state:current":"item.current","attr:hreflang":"item.locale","attr:title":"item.name"}}
::::::::
:::::::
::::::
:::::

::::: box {"id":"hdr-theme","props":{"tag":"button"},"label":"Light and dark","style":{"base":{"display":"grid","placeItems":"center","width":"44px","height":"44px","borderRadius":"token:radius.full","transition":"background-color 200ms ease"},"hover":{"backgroundColor":"token:color.surface"},"mobile":{"marginLeft":"auto"}},"bind":{"attr:aria-label":"globals.labels.theme"},"logic":{"on":[{"event":"click","actions":[{"do":"theme","mode":"toggle"}]}]}}
:::::: icon {"id":"hdr-theme-icon","props":{"icon":"circle-half"},"style":{"base":{"width":"20px","height":"20px"}}}
::::::
:::::

::::: box {"id":"hdr-toggle","props":{"tag":"button"},"label":"Menu button","style":{"base":{"display":"none","placeItems":"center","width":"44px","height":"44px","borderRadius":"token:radius.full","transition":"background-color 200ms ease"},"mobile":{"display":"grid"},"hover":{"backgroundColor":"token:color.surface"}},"bind":{"attr:aria-label":"globals.labels.menu"},"logic":{"on":[{"event":"click","actions":[{"do":"toggle","var":"open"},{"do":"if","test":"open","then":[{"do":"play","node":"hdr-panel-links","motion":"open","mode":"restart"}],"else":[]}]}],"attrs":{"aria-expanded":"open"}}}
:::::: icon {"id":"hdr-icon-open","props":{"icon":"list"},"style":{"base":{"width":"22px","height":"22px"}},"logic":{"show":"!open"}}
::::::

:::::: icon {"id":"hdr-icon-close","props":{"icon":"x"},"style":{"base":{"width":"22px","height":"22px"}},"logic":{"show":"open"}}
::::::
:::::
::::

:::: box {"id":"hdr-panel","props":{"tag":"nav"},"label":"Phone menu","style":{"base":{"display":"none"},"mobile":{"display":"block","borderTop":"1px solid token:color.border"}},"attrs":{"aria-label":"Main"},"logic":{"show":"open","transition":"collapse"}}
::::: repeat {"id":"hdr-panel-links","props":{"source":"menu","menu":"main","tag":"ul"},"style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingTop":"token:space.6","paddingBottom":"token:space.3"}},"motion":[{"id":"open","trigger":{"type":"event"},"steps":[{"target":"children","from":{"opacity":0,"y":14},"duration":0.5,"ease":"token:ease.out","stagger":0.05}]}]}
:::::: box {"id":"hdr-panel-item","props":{"tag":"li"}}
::::::: link {"id":"hdr-panel-link","style":{"base":{"display":"block","paddingBlock":"token:space.3","fontSize":"token:text.2xl","letterSpacing":"token:tracking.tight","fontWeight":"token:weight.medium"}},"bind":{"label":"item.label","url":"item.url"}}
:::::::

::::::: repeat {"id":"hdr-panel-sub","props":{"source":"list","path":"item.children","tag":"ul","as":"sub"},"style":{"base":{"paddingLeft":"token:space.4","borderLeft":"1px solid token:color.border"}}}
:::::::: box {"id":"hdr-panel-subitem","props":{"tag":"li"}}
::::::::: link {"id":"hdr-panel-sublink","style":{"base":{"display":"block","paddingBlock":"token:space.3","color":"token:color.muted"}},"bind":{"label":"sub.label","url":"sub.url"}}
:::::::::
::::::::
:::::::
::::::
:::::

::::: box {"id":"hdr-panel-tongue","style":{"base":{"width":"100%","maxWidth":"token:container.wide","marginInline":"auto","paddingInline":"token:space.gutter","paddingBottom":"token:space.4"}}}
:::::: repeat {"id":"hdr-panel-lang","props":{"source":"languages","tag":"ul"},"style":{"base":{"display":"flex","alignItems":"center","gap":"token:space.1"}}}
::::::: box {"id":"hdr-panel-lang-item","props":{"tag":"li"}}
:::::::: link {"id":"hdr-panel-lang-link","style":{"base":{"fontFamily":"token:font.mono","fontSize":"token:text.xs","letterSpacing":"token:tracking.wide","textTransform":"uppercase","color":"token:color.muted","lineHeight":"1.4","display":"grid","placeItems":"center","minWidth":"36px","minHeight":"44px"},"is-current":{"color":"token:color.foreground"},"hover":{"color":"token:color.foreground"}},"bind":{"label":"item.locale","url":"item.url","state:current":"item.current","attr:hreflang":"item.locale","attr:title":"item.name"}}
::::::::
:::::::
::::::
:::::
::::
:::
