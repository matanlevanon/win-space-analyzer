# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/) and versions follow
[Semantic Versioning](https://semver.org/).

> Versions up to and including 1.2.1 belong to the original
> [disk-space-analyzer](https://github.com/MatanCH2020/disk-space-analyzer) project (MIT).
> From 1.3.0 onward the project continues as **win-space-analyzer**.

## [1.3.0] — 2026-07-26
### Added
- **Bilingual UI (English / עברית)** — a language toggle in the header; the choice persists
  between launches, with a full direction flip (LTR/RTL) of the entire interface, the
  treemap, and the system-tray menu. English is the default.
- **Volume capacity bar in the results view** — total size / used / free with a bar and
  percentage, always visible while browsing inside a drive (on every tab and at every
  folder depth), not just on the home screen. Refreshes free-space data in the background.

### Changed
- Landing page (`docs/`) rewritten in English for an international audience.
- Project identity: renamed to win-space-analyzer with a new app ID, so it installs
  side-by-side with the original app; auto-updates now come from this repository.

[1.3.0]: https://github.com/matanlevanon/win-space-analyzer/releases/tag/v1.3.0

## [1.2.1] — 2026-07-22
### Added
- **"About & what's new" screen** — opened from the version pill in the header; shows the
  installed version, a "Check for updates" button, and friendly release notes for each
  version. Opens automatically once after an update.

### Fixed
- **Update banner appearing empty** — a CSS rule overrode the `hidden` attribute and kept
  the banner always visible (and empty). Fixed globally.

[1.2.1]: https://github.com/MatanCH2020/disk-space-analyzer/releases/tag/v1.2.1

## [1.2.0] — 2026-07-22
### Added
- **System-tray icon** (next to the clock) while the app runs — with a menu: Show / Check
  for updates / Quit. Closing the window hides to the tray; full exit via the menu.
- **Version display in the UI** (header pill) + **in-app updates**: automatic check against
  GitHub, one-click download and install (electron-updater).

### Fixed
- **Slider direction** (Show above / Highlight above) that worked backwards in RTL.

[1.2.0]: https://github.com/MatanCH2020/disk-space-analyzer/releases/tag/v1.2.0

## [1.1.0] — 2026-07-22
### Added
- **Custom app icon** (treemap motif) — shown in the installer, the shortcut, and the app window.
- **Landing page** (`docs/`), published via GitHub Pages, with an overview, features, and
  the install command.

[1.1.0]: https://github.com/MatanCH2020/disk-space-analyzer/releases/tag/v1.1.0

## [1.0.0] — 2026-07-22
The first public release.

### Added
- **Disk-space scanner for Windows 11**, built on Electron.
- **Home screen** with all drives, a used/free bar and total size; scan a single drive or "Scan all".
- **Fast scan engine** based on `robocopy /MT` in a separate worker — ~3.5× faster than
  per-file `stat` (~7s on C:\Windows instead of ~25s), with live progress and clean cancel.
- **Treemap** (self-contained squarified algorithm) + a percentage list, drill-down into
  subfolders with a breadcrumb.
- **"Open in Explorer" button** on every item — the app never deletes; removal is manual.
- **Saved scans** per drive + "Show last results" and "Back to results" (no rescan needed).
- **"Biggest folders" tab** — a flat list with a direct jump to any folder.
- **"Changes" tab** — comparison against the previous scan (what grew / freed up / is new).
- **Sorting & filtering** by size/name, a "Show above" slider, and highlighting of folders
  above a threshold.
- **Distribution**: NSIS installer (Setup.exe), a portable build, a one-line install
  command (`install.ps1`), and automated release builds on GitHub Actions.

### Fixed
- The home screen refreshes automatically after a scan (last-scanned status and free space)
  without a manual click.

[1.0.0]: https://github.com/MatanCH2020/disk-space-analyzer/releases/tag/v1.0.0
