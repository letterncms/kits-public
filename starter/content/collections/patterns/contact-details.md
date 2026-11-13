---
id: 01m7bf0hecpc4at7yn43gy5e3z
title: 'Contact Details'
status: published
published_at: '2026-11-13T22:03:53+00:00'
position: 4
category: 'Calls to Action'
description: 'Email, phone and address side by side, taken from the Studio settings.'
---

::: section {"id":"contact-details-s","props":{"width":"wide"}}
:::: box {"id":"contact-details-g","props":{"tag":"address"},"style":{"base":{"display":"grid","gridTemplateColumns":"repeat(3,minmax(0,1fr))","gap":"token:space.grid","fontStyle":"normal","paddingTop":"token:space.8","borderTop":"1px solid token:color.border"},"tablet":{"gridTemplateColumns":"minmax(0,1fr)","rowGap":"token:space.8"}}}
::::: box {"id":"contact-details-w","style":{"base":{"display":"flex","flexDirection":"column","gap":"token:space.2"}}}
:::::: paragraph {"id":"contact-details-wl","props":{"text":"Write","tag":"p"},"class":"eyebrow"}
::::::

:::::: link {"id":"contact-details-we","style":{"base":{"fontSize":"token:text.2xl"}},"bind":{"label":"globals.studio.email","url":"mailto:{globals.studio.email}"}}
::::::
:::::

::::: box {"id":"contact-details-c","style":{"base":{"display":"flex","flexDirection":"column","gap":"token:space.2"}}}
:::::: paragraph {"id":"contact-details-cl","props":{"text":"Call","tag":"p"},"class":"eyebrow"}
::::::

:::::: paragraph {"id":"contact-details-cp","props":{"tag":"p"},"style":{"base":{"fontSize":"token:text.2xl"}},"bind":{"text":"globals.studio.phone"}}
::::::
:::::

::::: box {"id":"contact-details-v","style":{"base":{"display":"flex","flexDirection":"column","gap":"token:space.2"}}}
:::::: paragraph {"id":"contact-details-vl","props":{"text":"Visit","tag":"p"},"class":"eyebrow"}
::::::

:::::: paragraph {"id":"contact-details-va","props":{"tag":"p"},"style":{"base":{"fontSize":"token:text.lg","whiteSpace":"pre-line"}},"bind":{"text":"globals.studio.address"}}
::::::
:::::
::::
:::
