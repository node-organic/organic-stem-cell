# organic-stem-cell v4

Predefined organic stem cell implementation

Uses under-the-hood:

* `organic-plasma@4.0.0`
* `organic-nucleus@3.0.0`
* `organic-dna-loader@1.8.0`

## usage within nodejs

### using dna folder

Autoloads from dna folder via `organic-dna-loader@1`

```
const path = require('path')
const Cell = require('organic-stem-cell')

let cellInstance = new Cell({
  dnaSourcePaths: [path.join(process.cwd(), 'dna')],
})
cellInstance.start()
```

### using pre-loaded dna

```
const Cell = require('organic-stem-cell')

let cellInstance = new Cell({
  dna: {
    build: {
      ...
    }
  },
})
cellInstance.start()
```

## usage within browsers

```
const Cell = require('organic-stem-cell')
const dnaChunk = {
  build: {
    organelle1: {
      source: require('my-organelle1')
    }
  }
}

let cellInstance = new Cell({
  dna: dnaChunk,
})
cellInstance.start()
```

## API

### nodejs
#### constructor (options)
##### options & defaults

```
{
  dnaSourcePaths: undefined, // Array[String]
  dna: undefined, // Object
  buildBranch: 'build',
  cellRoot: process.cwd(),
  defaultKillChemical: 'kill',
  supressListenOnProcessEvents: false,
  cellMode: process.env.CELL_MODE,
  beforeResolve: function (dna) { return dna },
  afterResolve: function (dna) { return dna },
  plasma: new Plasma(),
  nucleus: new Nucleus(),
  dnaLoader: require('organic-dna-loader')
}
```

#### properties

##### cell.plasma
##### cell.nucleus
##### cell.dna

#### methods

##### async start ()
##### async stop ()
##### async loadDNA ()

### browser

#### constructor (options)
##### options & defaults

```
{
  buildBranch: 'build',
  cellRoot: process.cwd(),
  defaultKillChemical: 'kill',
  cellMode: process.env.CELL_MODE,
  plasma: new Plasma(),
  nucleus: new Nucleus()
}
```

#### properties

##### cell.plasma
##### cell.nucleus
##### cell.dna

#### methods
##### start ()
##### stop ()
