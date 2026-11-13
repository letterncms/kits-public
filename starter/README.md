# Starter

A complete site to make your own, and the site a new Lettern site starts from unless you choose another. It is a small studio by the sea, with a home page, work, a journal, about and contact pages and a library of ready-made patterns, set on a calm, editorial design: one typeface with a serif for accents, a twelve-column grid, and photographs, a film and a sound recording throughout. Replace the words and pictures, and keep the rest.

## Install

```bash
composer require letterncms/starter
php cms site:apply starter --dry-run
php cms site:apply starter
```

Or choose **Starter** when you install (`php cms install --start-from=starter`, or in the browser; it is the default), or under Settings → Sites.

## What it brings

- **Pages**: Home, Work, Journal, About, Contact and Patterns, the library shown on one page, each built from the admin’s own blocks.
- **Collections**: Work, four projects with a cover, client, place and year; Journal, five stories with a cover, topic and tags, that filter and search on the page.
- **Templates**: Blank, Page, Text Page, Story, Story Side by Side, Project and 404.
- **Components**: the header with a full-screen menu on phones, the footer, and cards for stories and projects.
- **Patterns**: 29 sections to insert and edit freely, from heroes with a photograph or a film to galleries, carousels, a sound recording, numbers, a team, prices, an agenda, questions and calls to action, and four whole pages (a landing page, an about page, an event page and a photo story) to start a new page from.
- **Globals and menus**: the Studio’s tagline, address, hours, email and phone, used in the footer and on Contact, and a main and a footer menu.
- **The design**: tokens for light and dark, Inter and Instrument Serif, buttons, form fields, and three section styles in Site CSS (`band`, `tint`, `on-photo`).
- **Media**: 33 photographs, a ten-second film and a sound recording, with their alt text.

## Needs

Lettern 0.36 or later. No plugins. Applying it brings Site CSS, so it needs the **Edit Custom CSS and JavaScript** permission. The fonts, photographs, film and sound keep their own licences: see `NOTICE.md`.
