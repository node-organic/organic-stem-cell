# organic-stem-cell

predefined organic stem cell implementation

## usage within nodejs

```
const CELL_MODE = process.env.CELL_MODE

const path = require('path')
const Cell = require('organic-stem-cell')

let cellInstance = new Cell({
  dnaSourcePaths: [path.join(__dirname, 'dna')],
  buildBranch: 'build',
  cellRoot: __dirname,
  defaultKillChemical: 'kill'
})
cellInstance.start(CELL_MODE)
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
