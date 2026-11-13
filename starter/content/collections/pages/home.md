---
id: 01m7bf0hdtbd9d9d33m5gp91er
title: Home
status: published
published_at: '2026-11-13T22:03:53+00:00'
position: 0
summary: 'A studio for furniture, ceramics and rooms, made slowly by the sea.'
template: default
---

::: section {"id":"h-hero","props":{"tag":"header","width":"wide"},"label":"Hero","style":{"base":{"paddingTop":"clamp(2.5rem, 7vw, 7rem)","paddingBottom":"token:space.block"}}}
:::: box {"id":"h-hero-top","style":{"base":{"gap":"token:space.6","display":"flex","alignItems":"baseline","marginBottom":"token:space.8","justifyContent":"space-between"},"mobile":{"gap":"token:space.1","marginBottom":"token:space.6","flexDirection":"column"}}}
::::: paragraph {"id":"h-hero-kicker","props":{"tag":"p","text":"Furniture, ceramics and rooms"},"class":"eyebrow"}
:::::

::::: paragraph {"id":"h-hero-hours","props":{"tag":"p"},"bind":{"text":"globals.studio.hours"},"class":"meta"}
:::::
::::

:::: heading {"id":"h-hero-title","props":{"text":"Things made slowly, <em>to be used for a&nbsp;long time.</em>","level":"1"},"style":{"base":{"maxWidth":"11.5em","marginTop":"0"}},"motion":[{"id":"h-rise","steps":[{"ease":"power4.out","from":{"y":"110%"},"mask":true,"target":"words","stagger":0.045,"duration":1}],"trigger":{"type":"load"}}],"class":"display"}
::::
:::

::: section {"id":"h-film","props":{"width":"full"},"label":"Film","style":{"base":{"paddingBlock":"0"}}}
:::: video {"id":"h-film-video","props":{"fit":"cover","file":["01m7ba38vd2byrj19ycky7ny47"],"loop":true,"poster":["01m7ba38vcsxdm1sqta31gsm3h"],"autoplay":true,"controls":false},"style":{"base":{"overflow":"clip","aspectRatio":"21/9","backgroundColor":"token:color.band"},"mobile":{"aspectRatio":"4/5"},"tablet":{"aspectRatio":"16/10"}}}
::::

:::: box {"id":"h-film-caption","style":{"base":{"gap":"token:space.4","display":"flex","maxWidth":"token:container.wide","paddingTop":"token:space.4","marginInline":"auto","paddingInline":"token:space.gutter","justifyContent":"space-between"}}}
::::: paragraph {"id":"h-film-caption-text","props":{"tag":"p","text":"Centering clay for a set of table bowls, in the workshop on Harbour Road."},"class":"meta"}
:::::

::::: motion-toggle {"id":"h-film-pause","props":{"play_label":"Play motion","pause_label":"Pause motion"},"style":{"base":{"color":"token:color.foreground","border":"0","cursor":"pointer","padding":"0","background":"none","flexShrink":"0","textDecorationColor":"token:color.foreground/30","textUnderlineOffset":"0.2em"},"hover":{"textDecorationColor":"currentColor"}},"class":"meta"}
:::::
::::
:::

::: section {"id":"h-intro","props":{"width":"wide"},"label":"Introduction"}
:::: box {"id":"h-intro-grid","style":{"base":{"rowGap":"token:space.6","display":"grid","columnGap":"token:space.grid","gridTemplateColumns":"repeat(12,minmax(0,1fr))"}}}
::::: paragraph {"id":"h-intro-label","props":{"tag":"p","text":"The studio"},"style":{"base":{"gridColumn":"1 / span 3","paddingTop":"0.6rem"},"tablet":{"gridColumn":"1 / -1","paddingTop":"0"}},"class":"eyebrow"}
:::::

::::: box {"id":"h-intro-text","style":{"base":{"gap":"token:space.8","display":"flex","alignItems":"flex-start","gridColumn":"5 / -1","flexDirection":"column"},"tablet":{"gridColumn":"1 / -1"}}}
:::::: paragraph {"id":"h-intro-lede","props":{"tag":"p","text":"We are five makers in an old net loft by the harbour. We design and build furniture, throw tableware and fit out rooms, for people who would rather have <em>fewer, better things</em>."},"style":{"base":{"fontSize":"token:text.3xl","maxWidth":"22em","lineHeight":"1.18","letterSpacing":"token:tracking.snug"}},"motion":[{"id":"h-intro-in","steps":[{"ease":"power3.out","from":{"y":18,"opacity":0},"mask":true,"target":"lines","stagger":0.08,"duration":0.9}],"trigger":{"type":"appear"}}],"class":"lede"}
::::::

:::::: button {"id":"h-intro-more","props":{"url":"entry:01m7bf0hdtbd9d9d33m5gp91ev","icon":"arrow-right","label":"About the studio","variant":"secondary","icon_position":"end"}}
::::::
:::::
::::
:::

::: section {"id":"h-work","props":{"width":"wide"},"label":"Selected work","style":{"base":{"paddingTop":"0"}}}
:::: box {"id":"h-work-head","style":{"base":{"gap":"token:space.6","display":"flex","borderTop":"1px solid token:color.border","alignItems":"end","paddingTop":"token:space.8","justifyContent":"space-between"}}}
::::: heading {"id":"h-work-title","props":{"text":"Selected work","level":"2"}}
:::::

::::: link {"id":"h-work-all","props":{"url":"entry:01m7bf0hdtbd9d9d33m5gp91es","icon":"arrow-right","label":"All work","icon_position":"end"},"style":{"base":{"color":"token:color.foreground"}},"class":"meta"}
:::::
::::

:::: repeat {"id":"h-work-list","props":{"sort":"position","limit":4,"source":"entries","collection":"work"},"style":{"base":{"rowGap":"token:space.block","display":"grid","columnGap":"token:space.grid","marginTop":"token:space.12","gridTemplateColumns":"repeat(2,minmax(0,1fr))"},"mobile":{"gridTemplateColumns":"minmax(0,1fr)"}}}
::::: box {"id":"h-work-item","style":{"even":{"paddingTop":"clamp(0rem, 12vw, 12rem)"},"mobile:even":{"paddingTop":"0"}},"motion":[{"id":"h-work-in","steps":[{"ease":"power3.out","from":{"y":40,"opacity":0},"target":"self","duration":1}],"trigger":{"type":"appear"}}]}
:::::: component {"id":"h-work-card","props":{"ref":"project-card","values":{"aspect":"4/5"}},"bind":{"values.link":"item.url","values.year":"item.year","values.image":"item.cover","values.title":"item.title","values.discipline":"item.discipline"}}
::::::
:::::
::::
:::

::: section {"id":"h-make","props":{"width":"wide"},"label":"What we make","style":{"base":{"backgroundColor":"token:color.surface"}}}
:::: box {"id":"h-make-head","style":{"base":{"rowGap":"token:space.4","display":"grid","columnGap":"token:space.grid","marginBottom":"token:space.12","gridTemplateColumns":"repeat(12,minmax(0,1fr))"}}}
::::: paragraph {"id":"h-make-label","props":{"tag":"p","text":"What we make"},"style":{"base":{"gridColumn":"1 / span 3","paddingTop":"0.75rem"},"tablet":{"gridColumn":"1 / -1","paddingTop":"0"}},"class":"eyebrow"}
:::::

::::: heading {"id":"h-make-title","props":{"text":"Three crafts under one roof, so a room can be <em>made as a whole</em>.","level":"2"},"style":{"base":{"maxWidth":"16em","gridColumn":"5 / -1"},"tablet":{"gridColumn":"1 / -1"}}}
:::::
::::

:::: box {"id":"h-make-grid","style":{"base":{"gap":"token:space.grid","display":"grid","gridTemplateColumns":"repeat(3,minmax(0,1fr))"},"tablet":{"gap":"token:space.12","gridTemplateColumns":"minmax(0,1fr)"}}}
::::: box {"id":"h-make-1","props":{"tag":"article"},"style":{"base":{"gap":"token:space.4","display":"flex","flexDirection":"column"}}}
:::::: image {"id":"h-make-1-img","props":{"alt":"Hands marking a line on an oak board with a pencil.","image":["01m7ba38tbnnp5x3srt37wanq2"],"sizes":"(min-width: 64rem) 32vw, 100vw","aspect":"4/5"}}
::::::

:::::: paragraph {"id":"h-make-1-n","props":{"tag":"p","text":"01"},"style":{"base":{"marginTop":"token:space.2"}},"class":"meta"}
::::::

:::::: heading {"id":"h-make-1-t","props":{"text":"Furniture","level":"3"}}
::::::

:::::: paragraph {"id":"h-make-1-p","props":{"tag":"p","text":"Tables, benches and chairs in oak, ash and walnut from trees felled within a day’s drive. Joined by hand, finished with oil, and repaired by us for as long as they’re in use."},"style":{"base":{"color":"token:color.muted","maxWidth":"26em"}}}
::::::
:::::

::::: box {"id":"h-make-2","props":{"tag":"article"},"style":{"base":{"gap":"token:space.4","display":"flex","paddingTop":"token:space.16","flexDirection":"column"},"tablet":{"paddingTop":"0"}}}
:::::: image {"id":"h-make-2-img","props":{"alt":"Wet hands shaping a bowl on a spinning wheel.","image":["01m7ba38te6wbdn2r5xh441w5w"],"sizes":"(min-width: 64rem) 32vw, 100vw","aspect":"4/5"}}
::::::

:::::: paragraph {"id":"h-make-2-n","props":{"tag":"p","text":"02"},"style":{"base":{"marginTop":"token:space.2"}},"class":"meta"}
::::::

:::::: heading {"id":"h-make-2-t","props":{"text":"Ceramics","level":"3"}}
::::::

:::::: paragraph {"id":"h-make-2-p","props":{"tag":"p","text":"Plates, bowls and jugs thrown on the wheel from local stoneware, glazed in the colours of the coast, and fired twice in the kiln behind the loft."},"style":{"base":{"color":"token:color.muted","maxWidth":"26em"}}}
::::::
:::::

::::: box {"id":"h-make-3","props":{"tag":"article"},"style":{"base":{"gap":"token:space.4","display":"flex","paddingTop":"token:space.32","flexDirection":"column"},"tablet":{"paddingTop":"0"}}}
:::::: image {"id":"h-make-3-img","props":{"alt":"A low wooden table and straw cushions in a quiet room with a round window.","image":["01m7ba38tj3beebgr7h3v7n7w8"],"sizes":"(min-width: 64rem) 32vw, 100vw","aspect":"4/5"}}
::::::

:::::: paragraph {"id":"h-make-3-n","props":{"tag":"p","text":"03"},"style":{"base":{"marginTop":"token:space.2"}},"class":"meta"}
::::::

:::::: heading {"id":"h-make-3-t","props":{"text":"Rooms","level":"3"}}
::::::

:::::: paragraph {"id":"h-make-3-p","props":{"tag":"p","text":"Kitchens, cafés and quiet places to read, drawn and built from the floor up, with the furniture and the tableware made for them."},"style":{"base":{"color":"token:color.muted","maxWidth":"26em"}}}
::::::
:::::
::::
:::

::: section {"id":"h-quote","props":{"width":"content"},"label":"Quote"}
:::: box {"id":"h-quote-in","props":{"tag":"figure"},"style":{"base":{"gap":"token:space.10","display":"flex","maxWidth":"58rem","textAlign":"center","alignItems":"center","marginInline":"auto","flexDirection":"column"}}}
::::: paragraph {"id":"h-quote-text","props":{"tag":"blockquote","text":"“We would rather make one table that lasts a lifetime than ten that last a season.”"},"style":{"base":{"fontSize":"token:text.5xl","textWrap":"balance","fontFamily":"token:font.serif","lineHeight":"1.04","letterSpacing":"-0.01em"}}}
:::::

::::: box {"id":"h-quote-who","props":{"tag":"figcaption"},"style":{"base":{"gap":"token:space.4","color":"token:color.foreground","display":"flex","textAlign":"left","alignItems":"center"}}}
:::::: image {"id":"h-quote-face","props":{"alt":"","image":["01m7ba38v3qs0vjhnt6s4p215b"],"sizes":"4rem","aspect":"1/1"},"style":{"base":{"width":"3.5rem","overflow":"hidden","flexShrink":"0","borderRadius":"token:radius.full"}}}
::::::

:::::: box {"id":"h-quote-name"}
::::::: paragraph {"id":"h-quote-n","props":{"tag":"p","text":"Ines Varga"},"style":{"base":{"fontWeight":"token:weight.medium"}}}
:::::::

::::::: paragraph {"id":"h-quote-r","props":{"tag":"p","text":"Founder and furniture maker"},"class":"meta"}
:::::::
::::::
:::::
::::
:::

::: section {"id":"h-pause","props":{"width":"full"},"label":"Photograph","style":{"base":{"overflow":"clip","paddingBlock":"0"}}}
:::: image {"id":"h-pause-img","props":{"alt":"Two people walking side by side along the shore.","image":["01m7ba38txhavpcp1xkh6rt6p1"],"sizes":"100vw"},"style":{"base":{"overflow":"clip","aspectRatio":"21/9"},"mobile":{"aspectRatio":"4/3"}},"motion":[{"id":"h-pause-drift","steps":[{"to":{"scale":1},"from":{"scale":1.08},"target":"self","duration":0.6}],"trigger":{"end":"bottom top","type":"scroll","start":"top bottom"}}]}
::::
:::

::: section {"id":"h-numbers","props":{"width":"wide"},"label":"In numbers"}
:::: box {"id":"h-numbers-grid","props":{"tag":"dl"},"style":{"base":{"gap":"token:space.grid","display":"grid","gridTemplateColumns":"repeat(4,minmax(0,1fr))"},"tablet":{"rowGap":"token:space.10","gridTemplateColumns":"repeat(2,minmax(0,1fr))"}}}
::::: box {"id":"h-num-1","style":{"base":{"gap":"token:space.3","display":"flex","borderTop":"1px solid token:color.foreground","paddingTop":"token:space.5","flexDirection":"column-reverse"}}}
:::::: paragraph {"id":"h-num-1-k","props":{"tag":"dt","text":"years at the harbour"},"class":"meta"}
::::::

:::::: paragraph {"id":"h-num-1-v","props":{"tag":"dd","text":"38"},"style":{"base":{"fontSize":"token:text.6xl","fontWeight":"token:weight.medium","lineHeight":"0.9","letterSpacing":"token:tracking.display","fontVariantNumeric":"tabular-nums"}}}
::::::
:::::

::::: box {"id":"h-num-2","style":{"base":{"gap":"token:space.3","display":"flex","borderTop":"1px solid token:color.foreground","paddingTop":"token:space.5","flexDirection":"column-reverse"}}}
:::::: paragraph {"id":"h-num-2-k","props":{"tag":"dt","text":"makers in the loft"},"class":"meta"}
::::::

:::::: paragraph {"id":"h-num-2-v","props":{"tag":"dd","text":"5"},"style":{"base":{"fontSize":"token:text.6xl","fontWeight":"token:weight.medium","lineHeight":"0.9","letterSpacing":"token:tracking.display"}}}
::::::
:::::

::::: box {"id":"h-num-3","style":{"base":{"gap":"token:space.3","display":"flex","borderTop":"1px solid token:color.foreground","paddingTop":"token:space.5","flexDirection":"column-reverse"}}}
:::::: paragraph {"id":"h-num-3-k","props":{"tag":"dt","text":"pieces leave the workshop each year"},"class":"meta"}
::::::

:::::: paragraph {"id":"h-num-3-v","props":{"tag":"dd","text":"240"},"style":{"base":{"fontSize":"token:text.6xl","fontWeight":"token:weight.medium","lineHeight":"0.9","letterSpacing":"token:tracking.display"}}}
::::::
:::::

::::: box {"id":"h-num-4","style":{"base":{"gap":"token:space.3","display":"flex","borderTop":"1px solid token:color.foreground","paddingTop":"token:space.5","flexDirection":"column-reverse"}}}
:::::: paragraph {"id":"h-num-4-k","props":{"tag":"dt","text":"kilometres to the nearest sawmill"},"class":"meta"}
::::::

:::::: paragraph {"id":"h-num-4-v","props":{"tag":"dd","text":"60"},"style":{"base":{"fontSize":"token:text.6xl","fontWeight":"token:weight.medium","lineHeight":"0.9","letterSpacing":"token:tracking.display"}}}
::::::
:::::
::::
:::

::: section {"id":"h-journal","props":{"width":"wide"},"label":"Journal","style":{"base":{"paddingTop":"0"}}}
:::: box {"id":"h-journal-head","style":{"base":{"gap":"token:space.6","display":"flex","borderTop":"1px solid token:color.border","alignItems":"end","paddingTop":"token:space.8","justifyContent":"space-between"}}}
::::: heading {"id":"h-journal-title","props":{"text":"From the journal","level":"2"}}
:::::

::::: link {"id":"h-journal-all","props":{"url":"entry:01m7bf0hdtbd9d9d33m5gp91et","icon":"arrow-right","label":"All stories","icon_position":"end"},"style":{"base":{"color":"token:color.foreground"}},"class":"meta"}
:::::
::::

:::: repeat {"id":"h-journal-list","props":{"sort":"-published_at","limit":3,"source":"entries","collection":"posts"},"style":{"base":{"gap":"token:space.grid","display":"grid","marginTop":"token:space.12","gridTemplateColumns":"repeat(3,minmax(0,1fr))"},"mobile":{"rowGap":"token:space.12","gridTemplateColumns":"minmax(0,1fr)"},"tablet":{"gridTemplateColumns":"repeat(2,minmax(0,1fr))"}}}
::::: component {"id":"h-journal-card","props":{"ref":"story-card"},"bind":{"values.date":"item.date|date:F j, Y","values.link":"item.url","values.image":"item.cover","values.title":"item.title","values.topic":"item.topic"}}
:::::
::::
:::
