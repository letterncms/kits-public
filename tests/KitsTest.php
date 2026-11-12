<?php

declare(strict_types=1);

namespace Cms\Kits\Tests;

use Cms\Modules\Site\Build\SiteBuilder;
use Cms\Modules\Site\Kits\Kit;
use Cms\Modules\Site\Kits\KitApplier;
use Cms\Modules\Site\Kits\KitFiles;
use Cms\Modules\Site\Kits\Kits;
use Cms\Support\Files;
use Cms\Tests\TestCase;
use PHPUnit\Framework\Attributes\DataProvider;

/** Every kit here is a package as AGENTS.md says, a kit the CMS reads without a complaint, and a site that builds. */
final class KitsTest extends TestCase
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
    public static function kits(): array
    {
        $out = [];

        foreach (glob(dirname(__DIR__).'/*/kit.json') ?: [] as $file) {
            $out[basename(dirname($file))] = [dirname($file)];
        }

        return $out;
    }

    public function test_there_are_kits(): void
    {
        $this->assertNotSame([], self::kits());
    }

    #[DataProvider('kits')]
    public function test_a_kit_is_a_package_of_its_own(string $dir): void
    {
        $handle = basename($dir);
        $composer = json_decode((string) file_get_contents($dir.'/composer.json'), true);
        $kit = json_decode((string) file_get_contents($dir.'/kit.json'), true);

        $this->assertSame('letterncms/'.$handle, $composer['name']);
        $this->assertSame('cms-kit', $composer['type']);
        $this->assertSame($composer['version'], $kit['version'], 'kit.json and composer.json say one version');
        $this->assertArrayHasKey('letterncms/cms', $composer['require']);
        $this->assertSame($handle, $kit['handle']);

        foreach ($kit['plugins'] ?? [] as $plugin) {
            $this->assertArrayHasKey($plugin, $composer['require'], "{$plugin} is in kit.json but not required");
        }

        $this->assertStringStartsWith("# Changelog\n\n## Unreleased\n", (string) file_get_contents($dir.'/CHANGELOG.md'));
        $readme = (string) file_get_contents($dir.'/README.md');

        foreach (['## Install', '## What it brings', '## Needs'] as $heading) {
            $this->assertStringContainsString($heading, $readme);
        }
    }

    #[DataProvider('kits')]
    public function test_a_kit_applies_and_builds_in_full_and_as_a_design(string $dir): void
    {
        Files::copyDirectory($dir, site_path('kits/'.basename($dir)));
        $kits = $this->app->make(Kits::class);
        $kits->flush();
        $kit = $kits->findOrFail(basename($dir));
        $this->assertInstanceOf(Kit::class, $kit);
        $this->assertSame([], $kits->problems());
        $this->app->make(KitFiles::class)->read($kit);
        $applier = $this->app->make(KitApplier::class);

        // As a design over the kit a new site starts from (the same kit's design over its own site is as good), then whole into an empty site.
        Files::copyDirectory(dirname(__DIR__).'/minimal', site_path('kits/minimal'));
        $kits->flush();
        $applier->apply($kits->findOrFail('minimal'), 'full', 'refuse', $this->admin(), withoutPlugins: true);
        $applier->apply($kit, 'design', 'rename', $this->admin(), withoutPlugins: true);
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
        $applied = $applier->apply($kit, 'full', 'refuse', $this->admin(), withoutPlugins: true);
        $this->assertSame([], array_values(array_filter($applied['steps'], static fn (array $step) => $step['action'] === 'clash')));
        $built = $this->app->make(SiteBuilder::class)->buildAll();
        $this->assertSame([], $built['errors']);
        $this->assertSame([], $built['warnings'] ?? [], 'a kit builds without a warning');
    }
}
