# Changelog

## Unreleased

### Changed

- Each collection marks its body on the field (`body: true`), which the CMS reads from 0.28 on.

## 0.2.0 (2026-11-12)

### Added

- **The site.** The survey office's pages, surveys, journal with Field Reports, topics with their archives, globals and menus in English, Dutch and French, its design with its fonts, scripts and vendored libraries, and the media it shows. Its preview pictures are `previews/home.webp` and `previews/survey.webp`; `NOTICE.md` holds the fonts' and libraries' licences.
- The kit's package: `composer require letterncms/fathomline` puts it in a site's `kits/`, ready for `php cms kit:apply fathomline`.
