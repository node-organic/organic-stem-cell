# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [major.minor.patch] - YYYY-MM-DD

### Changed
### Added
### Removed

## 4.0.0 - 2019-10-21

**breaking changes introduced due upgrade of organic-plasma to 3.0**

### Changed

* upgrade to `organic-plasma@3.0.0` - drops `plasma.emitAndCollect` and adds support for async/await with `plasma.emit`

## 3.2.0 - 2019-09-10

### Changed

* upgrade to `organic-dna-loader@1.8.0`
* upgrade to `organic-nucleus@3.0.0`

### Added

* support for custom `dnaLoader` implementation when running under `node`.

## 3.1.1 - 2019-08-08

### fixes in node version

* upgrades to `organic-dna-loader` v1.7.1 (fixes resolve hooks)
* removes dead code

## 3.1.0 - 2019-07-05

### additions to node version

* adds support to use `beforeResolve` and `afterResolve` hooks of `organic-dna-loader` v1.7
* adds support for referenced templates via `organic-dna-loader` v1.7 / `organic-dna-resolve` v1.1

## 3.0.3 - 2019-04-24

### fixes

* properly pass unhandled promise rejection error value to default handler

## 3.0.1 - 2019-04-23

### fixes

* properly handle SIGINT and SIGTERM signals

## 3.0.2 - 2019-04-07

### fixes

* npm audit made happy :)


## 3.0.0 - 2019-04-07

**The release contains breaking changes towards v2**

### Changed
- `cell.stop` - **breaking** doesn't accept killChemical input, uses the value provided on construction || default one.
- `cell.start` - **breaking** doesn't accept cellMode input, uses the value provided on construction || default one.

### Added

- cell properties (dna, plasma, nucleus)

### Added [nodejs]
- `cell.loadDNA`
- `cell.unhandledRejectionHandler`
- `cell.signintHandler`


## 2.0.4 - 2019-03-08

### Changed

- update to latest `organic-dna-loader@1.6.0`
