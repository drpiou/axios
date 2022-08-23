# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.4] - 2022-08-23

### Changed

- some typings

### Deprecated

- removed options from `prepareAxios().start()`
- some typings

## [0.0.3] - 2022-08-14

### Added

- examples

### Changed

- axios error returns `isConnexionTimeoutError` instead of `isTimeoutError`
- rewritten using vite

### Fixed

- import package in project
- fixed `abort` in `AxiosStartOptions` while in test mode
- fixed wrong `isAxiosError` when canceled
- fixed import
- some typings

## [0.0.2] - 2022-07-11

### Added

- injectable axios instance
- axios errors also returns `isConnexionError`
- axios errors also returns `isTimeoutError`

### Changed

- types

## [0.0.1] - 2022-06-19

### Added

- first commit

[Unreleased]: https://github.com/drpiou/axios/compare/v0.0.3...HEAD
[0.0.4]: https://github.com/drpiou/axios/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/drpiou/axios/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/drpiou/axios/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/drpiou/axios/releases/tag/v0.0.1
