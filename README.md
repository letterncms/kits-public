# Sites

The free sites we make, in one place. A site is a complete site to start from: its content, its design and its code, copied into your site once. Each one is in its own folder, with its own version and changelog, and installs on its own:

```bash
composer require letterncms/starter
php cms site:apply starter --dry-run
```

Or choose one when you install, or under Design → Sites in the admin.

## Working here

You need PHP 8.4 and Composer:

```bash
git clone https://github.com/letterncms/sites-public
cd sites-public
composer install
composer test
```

To try a site in a real site, make a site next to your clone and point it there:

```bash
composer create-project letterncms/lettern ../sandbox
cd ../sandbox
composer config repositories.sites path '../sites-public/*'
composer require letterncms/starter
php cms install --start-from=starter
php cms serve
```

To make a site, build the site you want in a site of its own, then `php cms site:export ../sites-public/<name>` and write its `composer.json`, `CHANGELOG.md` and `README.md` as the others have them. `AGENTS.md` says what a site holds.
