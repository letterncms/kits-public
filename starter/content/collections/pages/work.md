---
id: 01m7bf0hdtbd9d9d33m5gp91es
title: Work
status: published
published_at: '2026-11-13T22:03:53+00:00'
position: 1
summary: 'Rooms, furniture, ceramics and the odd book, made for people along the coast and a few further away.'
---

::: section {"id":"wk-list","props":{"width":"wide"},"style":{"base":{"paddingTop":"0"}}}
:::: list-filter {"id":"wk-filter"}
::::: filter-choice {"id":"wk-choice","props":{"look":"chips","facet":"discipline","label":"Discipline","all_label":"All work"},"style":{"base":{"borderTop":"1px solid token:color.border","paddingBlock":"token:space.6"}}}
:::::

::::: repeat {"id":"wk-items","props":{"sort":"position","source":"entries","filter_by":"item.discipline","collection":"work"},"style":{"base":{"rowGap":"token:space.block","display":"grid","columnGap":"token:space.grid","marginTop":"token:space.8","gridTemplateColumns":"repeat(2,minmax(0,1fr))"},"mobile":{"gridTemplateColumns":"minmax(0,1fr)"}}}
:::::: box {"id":"wk-item","style":{"even":{"paddingTop":"clamp(0rem, 12vw, 12rem)"},"mobile:even":{"paddingTop":"0"}}}
::::::: component {"id":"wk-card","props":{"ref":"project-card","values":{"aspect":"4/5"}},"bind":{"values.link":"item.url","values.year":"item.year","values.image":"item.cover","values.title":"item.title","values.discipline":"item.discipline"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"wk-empty"}
:::::: paragraph {"id":"wk-empty-text","props":{"tag":"p","text":"Nothing here yet."},"class":"meta"}
::::::
:::::
::::
:::
