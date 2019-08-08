const Nucleus = require('organic-nucleus/lib/nucleus-node')
const Plasma = require('organic-plasma')
const loadDna = require('organic-dna-loader')

module.exports = class Cell {
  constructor (options) {
    Object.assign(this, {
      killChemical: 'kill',
      cellMode: process.env.CELL_MODE,
      cellRoot: process.cwd(),
      buildBranch: 'build'
    }, options)
    if (!this.dna && !this.dnaSourcePaths) {
      throw new Error('dnaSourcePaths or dna required')
    }
    this.plasma = new Plasma()
    if (!this.supressListenOnProcessEvents) {
      process.on('SIGTERM', this.exitHandler.bind(this))
      process.on('SIGINT', this.exitHandler.bind(this))
      process.on('unhandledRejection', (err) => {
        this.unhandledRejectionHandler(err)
      })
    }
  }

  async loadDNA () {
    return new Promise((resolve, reject) => {
      loadDna({
        dnaSourcePaths: this.dnaSourcePaths,
        dnaMode: this.cellMode,
        beforeResolve: this.beforeResolve,
        afterResolve: this.afterResolve
      }, async (err, dna) => {
        if (err) return reject(err)
        resolve(dna)
      })
    })
  }

  async start () {
    return new Promise(async (resolve, reject) => {
      if (!this.dna) {
        this.dna = await this.loadDNA()
      }
      this.nucleus = new Nucleus(this.plasma, this.dna, this.cellRoot)
      this.nucleus.build({branch: this.buildBranch}, (err, results) => {
        if (err) return reject(err)
        resolve(results)
      })
    })
  }

  async stop () {
    return new Promise((resolve, reject) => {
      this.plasma.emitAndCollect(this.killChemical, resolve)
    })
  }

  unhandledRejectionHandler (err) {
    throw err
  }

  async exitHandler () {
    await this.stop()
    process.exit(0)
  }
}
