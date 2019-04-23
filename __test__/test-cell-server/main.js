const Cell = require('../../lib/node')
const path = require('path')
let instance = new Cell({
  dnaSourcePaths: [path.join(__dirname, './dna')],
  cellRoot: __dirname
})
instance.start()
