# Minimal

A home page, an about page and a blog with three posts, on one typeface and a calm design. The site a new Lettern site starts from, unless you choose another.

## Install

```bash
composer require letterncms/minimal
php cms site:apply minimal --dry-run
php cms site:apply minimal
```

Or choose **Minimal** when you install (`php cms install --start-from=minimal`, or in the browser; it is the default), or under Design → Sites.

## What it brings

- **Pages**: Home, About and Blog, built from the admin's own blocks.
- **Posts**: three, which show how a post is written, published and reused.
- **Globals and menus**: a footer, a main menu and a footer menu.
- **The design**: tokens for light and dark, templates and components, Inter, and a spotlight script and style.

## Needs

Lettern 0.26 or later. No plugins. Applying it brings a script, so it needs the **Edit Custom CSS and JavaScript** permission. Inter keeps its own licence: see `NOTICE.md`.
