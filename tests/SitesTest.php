<?php

declare(strict_types=1);

namespace Cms\Sites\Tests;

use Cms\Modules\Site\Build\SiteBuilder;
use Cms\Modules\Site\Sites\Site;
use Cms\Modules\Site\Sites\SiteApplier;
use Cms\Modules\Site\Sites\SiteFiles;
use Cms\Modules\Site\Sites\Sites;
use Cms\Support\Files;
use Cms\Tests\TestCase;
use PHPUnit\Framework\Attributes\DataProvider;

/** Every site here is a package as AGENTS.md says, a site the CMS reads without a complaint, and a site that builds. */
final class SitesTest extends TestCase
{
    protected function plugins(): array
    {
        return ['letterncms/blocks', 'letterncms/site', 'letterncms/navigation', 'letterncms/languages'];
    }

    protected function collections(): array
    {
        return [];
    }

    /** @return array<string, array{string}> */
    public static function sites(): array
    {
        $out = [];

        foreach (glob(dirname(__DIR__).'/*/site.json') ?: [] as $file) {
            $out[basename(dirname($file))] = [dirname($file)];
        }

        return $out;
    }

    public function test_there_are_sites(): void
    {
        $this->assertNotSame([], self::sites());
    }

    #[DataProvider('sites')]
    public function test_a_site_is_a_package_of_its_own(string $dir): void
    {
        $handle = basename($dir);
        $composer = json_decode((string) file_get_contents($dir.'/composer.json'), true);
        $sitePackage = json_decode((string) file_get_contents($dir.'/site.json'), true);

        $this->assertSame('letterncms/'.$handle, $composer['name']);
        $this->assertSame('cms-site', $composer['type']);
        $this->assertSame($composer['version'], $sitePackage['version'], 'site.json and composer.json say one version');
        $this->assertArrayHasKey('letterncms/cms', $composer['require']);
        $this->assertSame($handle, $sitePackage['handle']);

        foreach ($sitePackage['plugins'] ?? [] as $plugin) {
            $this->assertArrayHasKey($plugin, $composer['require'], "{$plugin} is in site.json but not required");
        }

        $this->assertStringStartsWith("# Changelog\n\n## Unreleased\n", (string) file_get_contents($dir.'/CHANGELOG.md'));
        $readme = (string) file_get_contents($dir.'/README.md');

        foreach (['## Install', '## What it brings', '## Needs'] as $heading) {
            $this->assertStringContainsString($heading, $readme);
        }
    }

    #[DataProvider('sites')]
    public function test_a_site_applies_and_builds_in_full_and_as_a_design(string $dir): void
    {
        Files::copyDirectory($dir, site_path('sites/'.basename($dir)));
        $sites = $this->app->make(Sites::class);
        $sites->flush();
        $sitePackage = $sites->findOrFail(basename($dir));
        $this->assertInstanceOf(Site::class, $sitePackage);
        $this->assertSame([], $sites->problems());
        $this->app->make(SiteFiles::class)->read($sitePackage);
        $applier = $this->app->make(SiteApplier::class);

        // As a design over the site a new site starts from (the same site's design over its own site is as good), then whole into an empty site.
        Files::copyDirectory(dirname(__DIR__).'/minimal', site_path('sites/minimal'));
        $sites->flush();
        $applier->apply($sites->findOrFail('minimal'), 'full', 'refuse', $this->admin(), withoutPlugins: true);
        $applier->apply($sitePackage, 'design', 'rename', $this->admin(), withoutPlugins: true);
        $this->assertSame([], $this->app->make(SiteBuilder::class)->buildAll()['errors']);

        foreach ($this->cms()->entries()->query()->ungated()->get() as $entry) {
            $this->cms()->entryService()->delete($entry->id, $this->admin());
        }

        foreach (array_keys($this->cms()->globals()->all()) as $handle) {
            $this->cms()->globals()->delete($handle);
        }

        foreach (['collections', 'navigation', 'design', 'media'] as $folder) {
            Files::deleteDirectory(content_path($folder));
        }

        $this->cms()->collections()->flush();
        $this->cms()->entries()->flush();
        $applied = $applier->apply($sitePackage, 'full', 'refuse', $this->admin(), withoutPlugins: true);
        $this->assertSame([], array_values(array_filter($applied['steps'], static fn (array $step) => $step['action'] === 'clash')));
        $built = $this->app->make(SiteBuilder::class)->buildAll();
        $this->assertSame([], $built['errors']);
        $this->assertSame([], $built['warnings'] ?? [], 'a site builds without a warning');
    }
}
