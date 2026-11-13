---
id: 01m7bf0hdtbd9d9d33m5gp91ew
title: Contact
status: published
published_at: '2026-11-13T22:03:53+00:00'
position: 4
summary: 'Write, call or come by. The workshop is open Thursday to Saturday, and the kettle is usually on.'
---

::: section {"id":"ct-main","props":{"width":"wide"},"label":"Details","style":{"base":{"paddingTop":"0"}}}
:::: box {"id":"ct-grid","style":{"base":{"rowGap":"token:space.12","display":"grid","borderTop":"1px solid token:color.border","columnGap":"token:space.grid","paddingTop":"token:space.10","gridTemplateColumns":"repeat(12,minmax(0,1fr))"}}}
::::: box {"id":"ct-details","props":{"tag":"address"},"style":{"base":{"gap":"token:space.10","display":"flex","fontStyle":"normal","gridColumn":"1 / span 5","flexDirection":"column"},"tablet":{"gridColumn":"1 / -1"}}}
:::::: box {"id":"ct-write","style":{"base":{"gap":"token:space.2","display":"flex","flexDirection":"column"}}}
::::::: paragraph {"id":"ct-write-label","props":{"tag":"p","text":"Write"},"class":"eyebrow"}
:::::::

::::::: link {"id":"ct-email","style":{"base":{"fontSize":"token:text.3xl","lineHeight":"1.2","letterSpacing":"token:tracking.snug"}},"bind":{"url":"mailto:{globals.studio.email}","label":"globals.studio.email"}}
:::::::
::::::

:::::: box {"id":"ct-call","style":{"base":{"gap":"token:space.2","display":"flex","flexDirection":"column"}}}
::::::: paragraph {"id":"ct-call-label","props":{"tag":"p","text":"Call"},"class":"eyebrow"}
:::::::

::::::: paragraph {"id":"ct-phone","props":{"tag":"p"},"style":{"base":{"fontSize":"token:text.3xl","lineHeight":"1.2","letterSpacing":"token:tracking.snug"}},"bind":{"text":"globals.studio.phone"}}
:::::::
::::::

:::::: box {"id":"ct-visit","style":{"base":{"gap":"token:space.2","display":"flex","flexDirection":"column"}}}
::::::: paragraph {"id":"ct-visit-label","props":{"tag":"p","text":"Visit"},"class":"eyebrow"}
:::::::

::::::: paragraph {"id":"ct-address","props":{"tag":"p"},"style":{"base":{"fontSize":"token:text.xl","lineHeight":"1.45","whiteSpace":"pre-line"}},"bind":{"text":"globals.studio.address"}}
:::::::

::::::: paragraph {"id":"ct-hours","props":{"tag":"p"},"bind":{"text":"globals.studio.hours"},"class":"meta"}
:::::::
::::::

:::::: buttons {"id":"ct-actions"}
::::::: button {"id":"ct-mail","props":{"icon":"envelope-simple","size":"lg","label":"Write to us","variant":"primary","icon_position":"start"},"bind":{"url":"mailto:{globals.studio.email}"}}
:::::::

::::::: button {"id":"ct-insta","props":{"size":"lg","label":"Instagram","new_tab":true,"variant":"secondary"},"bind":{"url":"globals.studio.instagram","visible":"globals.studio.instagram"}}
:::::::
::::::
:::::

::::: image {"id":"ct-image","props":{"alt":"Two people on a grass lane between trees that leads to the sea.","image":["01m7ba38tzva6369gacpp7mqw9"],"sizes":"(min-width: 64rem) 50vw, 100vw","aspect":"4/5","caption":"The lane from the car park to the workshop. Follow it to the end."},"style":{"base":{"gridColumn":"7 / -1"},"tablet":{"gridColumn":"1 / -1"}}}
:::::
::::
:::

::: section {"id":"ct-getting-here","props":{"width":"wide"},"label":"Getting here","class":"tint"}
:::: columns {"id":"ct-gh-cols","props":{"gap":"token:space.6","layout":"1-1-1"}}
::::: column {"id":"ct-gh-1"}
:::::: heading {"id":"ct-gh-1-t","props":{"text":"By train","level":"3"},"style":{"base":{"fontSize":"token:text.xl","marginBottom":"token:space.3"}}}
::::::

:::::: paragraph {"id":"ct-gh-1-p","props":{"tag":"p","text":"Trains run every half hour to the harbour station. From there it is a ten-minute walk along the quay, past the fish auction."},"style":{"base":{"color":"token:color.muted"}}}
::::::
:::::

::::: column {"id":"ct-gh-2"}
:::::: heading {"id":"ct-gh-2-t","props":{"text":"By bike","level":"3"},"style":{"base":{"fontSize":"token:text.xl","marginBottom":"token:space.3"}}}
::::::

:::::: paragraph {"id":"ct-gh-2-p","props":{"tag":"p","text":"The coast path passes the back of the yard. Leave your bike against the timber stack; nobody will move it."},"style":{"base":{"color":"token:color.muted"}}}
::::::
:::::

::::: column {"id":"ct-gh-3"}
:::::: heading {"id":"ct-gh-3-t","props":{"text":"By car","level":"3"},"style":{"base":{"fontSize":"token:text.xl","marginBottom":"token:space.3"}}}
::::::

:::::: paragraph {"id":"ct-gh-3-p","props":{"tag":"p","text":"Park at the dune car park and take the grass lane to the sea. For a delivery or a collection, drive right up to the loft door."},"style":{"base":{"color":"token:color.muted"}}}
::::::
:::::
::::
:::
