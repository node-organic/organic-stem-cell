# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [3.0.0] - 2019-04-07

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


## [2.0.4] - 2019-03-08

### Changed

- update to latest `organic-dna-loader@1.6.0`
