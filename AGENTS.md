# Public sites

The free sites. Each folder is one package, `letterncms/<folder>` of type `cms-site`, with its own version and changelog. The repository named after a site is written by a release: never edit it. `README.md` says how to run all of this from a clean clone.

## What a site is

A complete site to start from, copied into a site once. Afterwards the site owns every file: nothing links back, and a new version of the site never reaches a site that applied an older one. Its design is part of it, as a site's is: tokens, templates and components are the site's own files and entries, and nothing of it stays shared with the site once applied.

A site is a folder laid out like a site's own `content/` and `config/`, with `site.json` beside them. Only the files below are read; anything else under `content/`, `config/`, `public/` or `previews/` refuses the whole site, by name, before a file is copied.

| File | Holds |
|---|---|
| `site.json` | `handle` (the folder's name), `name`, `version` (`1.2.3`, the same as `composer.json`), and optionally `description`, `license`, `cms` (a constraint, `>=0.26`), `plugins` (package names it needs), `languages` (codes, the main one first; `["en"]` when left out), `previews` (pictures in `previews/`), `demo` (an https address), `exported` (when it was made: a date ahead of it stays as far ahead when applied). No other keys. |
| `previews/<name>.png\|jpg\|webp` | The pictures `previews` names; the first is the one the installer and **Sites** show. 16:10, 960×600. The store lists a site with them, so a site we publish has at least two (Starter: `home.webp` and `journal.webp`, which the website’s listing names). |
| `content/collections/<handle>.yaml` | A collection's definition, as a site keeps it. |
| `content/collections/<handle>/[<locale>/][<parent>/]<slug>.md` | Its entries, always in this file layout whatever driver the collection uses: YAML front matter (`id`, `title`, `status`, `published_at`, `expires_at`, `origin`, `position`, `blueprint`, the fields) and the body field as Markdown or Block Markdown. Templates and components are entries of `templates` and `components`. `id` may be left out of an entry nothing names; every entry gets a new id when it is applied, and what named the old one (relations, parents, translations, menu items, links, component blocks) follows. `author`, `created_at` and `updated_at` are never written. |
| `content/globals/<handle>.yaml` | A global: its fields and values. |
| `content/navigation/<handle>.yaml` | A menu; items name entries by the ids in the site. |
| `content/design/tokens.json`, `custom.css`, `custom.js`, `code.json` | The design and where its code loads. |
| `content/design/fonts/*.woff2` | Fonts (real WOFF2). |
| `content/design/scripts/**.js`, `content/design/styles/**.css` | The design's scripts and styles, named as the design's code may be. |
| `content/design/vendor/lock.json` and its files | Vendored libraries; every file must match the lock's hash. |
| `content/media/<id>.yaml` and `public/media/<path>` | Media something in the site names: the record and its file, which must pass what an upload passes. |
| `config/<namespace>.yaml` | Only settings a site carries (`site`: `description`, `favicon`, `search_index`; plugins add theirs). Never a name, an address, mail, keys or secrets. |
| `content/<folder>/**.yaml\|json\|md` | Content a plugin keeps beside the site's (forms…), taken in only where that plugin is on. |

Never in a site: users, tokens, secrets, submissions, analytics, the audit log, licences, `.env`, `storage/`, links, hidden files, or anything a server runs (`.php`, `.phtml`, `.phar`, `.sh`, `.htaccess`…).

A package is the site plus `composer.json` (`"type": "cms-site"`, `require` on `letterncms/cms` and the plugins it needs), `CHANGELOG.md` and `README.md`. Composer puts it in a site's `sites/<name>`; the store does the same.

Applying (`php cms site:apply <handle> --mode=design|full --dry-run`, the ability `sites/apply`, or **Sites** in the admin): `design` brings tokens, fonts, templates, components and code; `full` adds collections, entries, globals, menus, media, languages and carried settings. Anything the site already has under a name the site brings is a clash: applying refuses and names each one until `--clash=skip|replace|rename` says what happens. `php cms site:export <folder>` (or `sites/export`) turns a site into a site in this layout: the way to make one.

## Rules

- **Make a site by exporting a site** that builds cleanly (`php cms build --strict`), then edit `site.json`. Never hand-write ids that clash with another site's.
- **Plain text, no brand in code:** a site is content, so the product's name may appear in its words; identifiers use the prefix `cms` and the vendor `letterncms`.
- **Every site applies and builds:** `composer test` applies each one to an empty site, in full and as a design, builds it, and fails on a warning.
- A change people can see gets a line under `## Unreleased` in that site's `CHANGELOG.md`, written for the reader. `./dev release <site>` takes the version from it.
- **Every site's `README.md` has one shape:** what it is, then `## Install`, `## What it brings` and `## Needs`, each true of the site as it is.
