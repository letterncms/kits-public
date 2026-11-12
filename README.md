# Kits

The free site kits we make, in one place. A kit is a complete site to start from: its content, its design and its code, copied into your site once. Each one is in its own folder, with its own version and changelog, and installs on its own:

```bash
composer require letterncms/fathomline
php cms kit:apply fathomline --dry-run
```

Or choose one when you install, or under Design → Site Kits in the admin.

## Working here

You need PHP 8.4 and Composer:

```bash
git clone https://github.com/letterncms/kits-public
cd kits-public
composer install
composer test
```

To try a kit in a real site, make a site next to your clone and point it there:

```bash
composer create-project letterncms/lettern ../sandbox
cd ../sandbox
composer config repositories.kits path '../kits-public/*'
composer require letterncms/fathomline
php cms install --kit=fathomline
php cms serve
```

To make a kit, build the site you want in a site of its own, then `php cms kit:export ../kits-public/<name>` and write its `composer.json`, `CHANGELOG.md` and `README.md` as the others have them. `AGENTS.md` says what a kit holds.
