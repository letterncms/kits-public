# Fathomline

The site of a survey office for moving ground, made with the admin's own blocks, design tokens and the design's scripts: a WebGL field of contour lines behind every page that follows the pointer, the scroll and the page, sections pinned to the scroll, a surveys index you filter, and a field that keeps drawing across pages that change without a reload. It works without scripts, with less motion and on a phone, in English, Dutch and French.

## Install

```bash
composer require letterncms/fathomline
php cms kit:apply fathomline --dry-run
php cms kit:apply fathomline
```

Or choose **Fathomline** when you install (`php cms install --kit=fathomline`, or in the browser), or under Design → Site Kits.

## What it brings

- **Pages** in a tree: Home, Surveys, Office with Method and Corrections, Journal, Commission and Privacy, each in English, Dutch and French.
- **Surveys**, six of them, with a plate, a summary, the place and the numbers that steer the field behind their page.
- **Journal** with a second kind of entry, the Field Report (station, instrument, conditions, a gust that shows only for a breeze or a gale, a calibration date once calibrated); one note scheduled, one with an end date and one still a draft.
- **Topics**, a taxonomy with an archive page per topic.
- **Globals** for the footer and the site's labels, a main menu with a submenu and a footer menu.
- **The design**: tokens for light and dark, templates and components, Hanken Grotesk, EB Garamond Italic and IBM Plex Mono, the scripts (`field`, `plate`, `cue`, `rows`, `gauge`, `smooth`) with three.js and Lenis vendored, and the plates, photos, a PDF and a 3D model they show.

## Needs

Lettern 0.28 or later. No plugins: the Journal's notices and the Commission page ask people to write to the office; with Forms or Brevo on, a form or a signup block goes in their place. Applying it brings scripts, so it needs the **Edit Custom CSS and JavaScript** permission. The fonts and libraries keep their own licences: see `NOTICE.md`.
