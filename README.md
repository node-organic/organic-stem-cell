# organic-stem-cell

predefined organic stem cell implementation

## usage within nodejs

```
const CELL_MODE = process.env.CELL_MODE

const path = require('path')
const Cell = require('organic-stem-cell')

let cellInstance = new Cell({
  dnaSourcePath: path.join(__dirname, 'dna'),
  cellBranch: 'build',
  cellRoot: __dirname
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
  cellBranch: 'build'
})
cellInstance.start()
```
