# organic-stem-cell

predefined organic stem cell implementation

## usage within nodejs

### using dna folder

Autoloads from dna folder via `organic-dna-loader@1`

```
const path = require('path')
const Cell = require('organic-stem-cell')

let cellInstance = new Cell({
  dnaSourcePaths: [path.join(process.cwd(), 'dna')],
  buildBranch: 'build',
  cellRoot: process.cwd(),
  defaultKillChemical: 'kill',
  supressListenOnProcessEvents: false,
  cellMode: process.env.CELL_MODE
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
  buildBranch: 'build',
  cellRoot: process.cwd(),
  defaultKillChemical: 'kill',
  supressListenOnProcessEvents: false
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
  buildBranch: 'build',
  defaultKillChemical: 'kill'
})
cellInstance.start()
```

## API

### nodejs
#### constructor (options)
#### properties
##### plasma: Plasma
##### nucleus: Nucleus
##### dna: DNA
##### killChemical, cellMode, cellRoot, buildBranch
#### methods
##### async start ()
##### async stop ()
##### async loadDNA ()
##### unhandledRejectionHandler ()
##### signintHandler ()

### browser

#### constructor (options)
#### properties
##### plasma
##### nucleus
##### dna
#### methods
##### start ()
##### stop ()
