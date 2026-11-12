# Public kits

The free site kits. Each folder is one package, `letterncms/<folder>` of type `cms-kit`, with its own version and changelog. The repository named after a kit is written by a release: never edit it. `README.md` says how to run all of this from a clean clone.

## What a kit is

A complete site to start from, copied into a site once. Afterwards the site owns every file: nothing links back, and a new version of the kit never reaches a site that applied an older one. Its design is part of it, as a site's is: tokens, templates and components are the kit's own files and entries, and nothing of it stays shared with the kit once applied.

A kit is a folder laid out like a site's own `content/` and `config/`, with `kit.json` beside them. Only the files below are read; anything else under `content/`, `config/`, `public/` or `previews/` refuses the whole kit, by name, before a file is copied.

| File | Holds |
|---|---|
| `kit.json` | `handle` (the folder's name), `name`, `version` (`1.2.3`, the same as `composer.json`), and optionally `description`, `license`, `cms` (a constraint, `>=0.26`), `plugins` (package names it needs), `languages` (codes, the main one first; `["en"]` when left out), `previews` (pictures in `previews/`), `demo` (an https address), `exported` (when it was made: a date ahead of it stays as far ahead when applied). No other keys. |
| `previews/<name>.png\|jpg\|webp` | The pictures `previews` names; the first is the one the installer and **Site Kits** show. 16:10, 960×600. The store lists a kit with them, so a kit we publish has at least two (Minimal: `home.webp` and `blog.webp`, which the website's listing names). |
| `content/collections/<handle>.yaml` | A collection's definition, as a site keeps it. |
| `content/collections/<handle>/[<locale>/][<parent>/]<slug>.md` | Its entries, always in this file layout whatever driver the collection uses: YAML front matter (`id`, `title`, `status`, `published_at`, `expires_at`, `origin`, `position`, `blueprint`, the fields) and the body field as Markdown or Block Markdown. Templates and components are entries of `templates` and `components`. `id` may be left out of an entry nothing names; every entry gets a new id when it is applied, and what named the old one (relations, parents, translations, menu items, links, component blocks) follows. `author`, `created_at` and `updated_at` are never written. |
| `content/globals/<handle>.yaml` | A global: its fields and values. |
| `content/navigation/<handle>.yaml` | A menu; items name entries by the ids in the kit. |
| `content/design/tokens.json`, `custom.css`, `custom.js`, `code.json` | The design and where its code loads. |
| `content/design/fonts/*.woff2` | Fonts (real WOFF2). |
| `content/design/scripts/**.js`, `content/design/styles/**.css` | The design's scripts and styles, named as the design's code may be. |
| `content/design/vendor/lock.json` and its files | Vendored libraries; every file must match the lock's hash. |
| `content/media/<id>.yaml` and `public/media/<path>` | Media something in the kit names: the record and its file, which must pass what an upload passes. |
| `config/<namespace>.yaml` | Only settings a kit carries (`site`: `description`, `favicon`, `search_index`; plugins add theirs). Never a name, an address, mail, keys or secrets. |
| `content/<folder>/**.yaml\|json\|md` | Content a plugin keeps beside the site's (forms…), taken in only where that plugin is on. |

Never in a kit: users, tokens, secrets, submissions, analytics, the audit log, licences, `.env`, `storage/`, links, hidden files, or anything a server runs (`.php`, `.phtml`, `.phar`, `.sh`, `.htaccess`…).

A package is the kit plus `composer.json` (`"type": "cms-kit"`, `require` on `letterncms/cms` and the plugins it needs), `CHANGELOG.md` and `README.md`. Composer puts it in a site's `kits/<name>`; the store does the same.

Applying (`php cms kit:apply <handle> --mode=design|full --dry-run`, the ability `kits/apply`, or **Site Kits** in the admin): `design` brings tokens, fonts, templates, components and code; `full` adds collections, entries, globals, menus, media, languages and carried settings. Anything the site already has under a name the kit brings is a clash: applying refuses and names each one until `--clash=skip|replace|rename` says what happens. `php cms kit:export <folder>` (or `kits/export`) turns a site into a kit in this layout: the way to make one.

## Rules

- **Make a kit by exporting a site** that builds cleanly (`php cms build --strict`), then edit `kit.json`. Never hand-write ids that clash with another kit's.
- **Plain text, no brand in code:** a kit is content, so the product's name may appear in its words; identifiers use the prefix `cms` and the vendor `letterncms`.
- **Every kit applies and builds:** `composer test` applies each one to an empty site, in full and as a design, builds it, and fails on a warning.
- A change people can see gets a line under `## Unreleased` in that kit's `CHANGELOG.md`, written for the reader. `./dev release <kit>` takes the version from it.
- **Every kit's `README.md` has one shape:** what it is, then `## Install`, `## What it brings` and `## Needs`, each true of the kit as it is.
