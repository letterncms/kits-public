---
id: 01m7bf0hdtbd9d9d33m5gp91et
title: Journal
status: published
published_at: '2026-11-13T22:03:53+00:00'
position: 2
summary: 'Notes from the workshop and the coast: how things are made, the people who make them, and the places in between.'
---

::: section {"id":"jn-latest","props":{"width":"wide"},"label":"Latest story","style":{"base":{"paddingTop":"0"}}}
:::: repeat {"id":"jn-latest-list","props":{"sort":"-published_at","limit":1,"source":"entries","collection":"posts"}}
::::: box {"id":"jn-feature","props":{"tag":"article"},"style":{"base":{"color":"inherit","rowGap":"token:space.6","display":"grid","position":"relative","columnGap":"token:space.grid","alignItems":"end","gridTemplateColumns":"repeat(12,minmax(0,1fr))"}},"bind":{"link":"item.url"},"logic":{"behaviors":{"group":true}}}
:::::: box {"id":"jn-feature-media","style":{"base":{"overflow":"clip","gridColumn":"1 / span 8"},"tablet":{"gridColumn":"1 / -1"}}}
::::::: image {"id":"jn-feature-image","props":{"sizes":"(min-width: 64rem) 66vw, 100vw","aspect":"3/2","priority":true},"style":{"base":{"transition":"transform 900ms cubic-bezier(.2,.8,.2,1)"},"group-hover":{"transform":"scale(1.02)"}},"bind":{"image":"item.cover"}}
:::::::
::::::

:::::: box {"id":"jn-feature-text","style":{"base":{"gap":"token:space.5","display":"flex","gridColumn":"9 / -1","flexDirection":"column","paddingBottom":"token:space.2"},"tablet":{"gridColumn":"1 / -1"}}}
::::::: box {"id":"jn-feature-meta","style":{"base":{"gap":"token:space.2","display":"flex"}},"class":"meta"}
:::::::: paragraph {"id":"jn-feature-topic","props":{"tag":"span"},"style":{"base":{"color":"token:color.foreground"}},"bind":{"text":"item.topic","visible":"item.topic"}}
::::::::

:::::::: paragraph {"id":"jn-feature-date","props":{"tag":"span"},"bind":{"text":"item.date|date:F j, Y"}}
::::::::
:::::::

::::::: heading {"id":"jn-feature-title","props":{"level":"2"},"style":{"base":{"fontSize":"token:text.4xl"}},"bind":{"text":"item.title"}}
:::::::

::::::: paragraph {"id":"jn-feature-summary","props":{"tag":"p"},"style":{"base":{"color":"token:color.muted","fontSize":"token:text.lg","lineHeight":"1.5"}},"bind":{"text":"item.summary","visible":"item.summary"}}
:::::::
::::::
:::::
::::
:::

::: section {"id":"jn-all","props":{"width":"wide"},"label":"All stories","style":{"base":{"paddingTop":"0"}}}
:::: list-filter {"id":"jn-filter"}
::::: box {"id":"jn-tools","style":{"base":{"gap":"token:space.4","display":"flex","flexWrap":"wrap","borderTop":"1px solid token:color.border","alignItems":"center","paddingBlock":"token:space.6","justifyContent":"space-between"}}}
:::::: filter-choice {"id":"jn-topics","props":{"look":"chips","facet":"topic","label":"Topic","all_label":"All stories"}}
::::::

:::::: filter-search {"id":"jn-search","props":{"label":"Search the journal","show_label":false,"placeholder":"Search the journal"},"style":{"base":{"width":"18rem","maxWidth":"100%"}}}
::::::
:::::

::::: repeat {"id":"jn-list","props":{"sort":"-published_at","offset":1,"source":"entries","filter_by":"item.topic","search_in":"item.title, item.summary","collection":"posts"},"style":{"base":{"rowGap":"token:space.16","display":"grid","columnGap":"token:space.grid","marginTop":"token:space.8","gridTemplateColumns":"repeat(3,minmax(0,1fr))"},"mobile":{"rowGap":"token:space.12","gridTemplateColumns":"minmax(0,1fr)"},"tablet":{"gridTemplateColumns":"repeat(2,minmax(0,1fr))"}}}
:::::: component {"id":"jn-card","props":{"ref":"story-card"},"bind":{"values.date":"item.date|date:F j, Y","values.link":"item.url","values.image":"item.cover","values.title":"item.title","values.topic":"item.topic"}}
::::::
:::::

::::: filter-empty {"id":"jn-empty"}
:::::: paragraph {"id":"jn-empty-text","props":{"tag":"p","text":"No stories match. Try another word or topic."},"style":{"base":{"paddingBlock":"token:space.12"}},"class":"meta"}
::::::
:::::
::::
:::
