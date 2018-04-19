const Nucleus = require('organic-nucleus/lib/nucleus-node')
const Plasma = require('organic-plasma')
const loadDna = require('organic-dna-loader')

module.exports = class Cell {
  constructor ({dna, dnaSourcePaths, buildBranch,
    cellRoot,
    defaultKillChemical
  } = {}) {
    this.defaultKillChemical = defaultKillChemical || 'kill'
    if (!dna) {
      this.dnaSourcePaths = dnaSourcePaths
      if (!this.dnaSourcePaths) throw new Error('dnaSourcePath required')
      this.buildBranch = buildBranch
      if (!this.buildBranch) throw new Error('buildBranch required')
      this.cellRoot = cellRoot
      if (!this.cellRoot) throw new Error('cellRoot required')
    } else {
      this.dna = dna
      if (!this.dna) throw new Error('dna required')
    }
    this.plasma = new Plasma()
  }

  async start (cellMode) {
    if (this.dna) {
      return this.build(this.dna)
    }
    return new Promise((resolve, reject) => {
      loadDna({
        dnaSourcePaths: this.dnaSourcePaths,
        dnaMode: cellMode
      }, async (err, dna) => {
        if (err) return reject(err)
        let nucleus = new Nucleus(this.plasma, dna, this.cellRoot)
        nucleus.build({branch: this.buildBranch}, (err, results) => {
          if (err) return reject(err)
          resolve(results)
        })
        // # listen for external interruptions
        this.signintHandler = async () => {
          await this.stop()
          process.exit(0)
        }
        process.on('SIGINT', this.signintHandler)
      })
    })
  }

  async stop (killChemical) {
    killChemical = killChemical || this.defaultKillChemical
    return new Promise((resolve, reject) => {
      if (process) {
        process.removeListener('SIGINT', this.signintHandler)
      }
      this.plasma.emitAndCollect(killChemical, resolve)
    })
  }
}
