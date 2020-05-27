const Nucleus = require('organic-nucleus/lib/nucleus-node')
const Plasma = require('organic-plasma')
const loadDnaDefault = require('organic-dna-loader')

module.exports = class Cell {
  constructor (options) {
    Object.assign(this, {
      killChemical: 'kill',
      cellMode: process.env.CELL_MODE,
      cellRoot: process.cwd(),
      buildBranch: 'build',
      dnaLoader: null
    }, options)
    if (!this.dna && !this.dnaSourcePaths && !this.dnaLoader) {
      throw new Error('dnaSourcePaths or dna or dnaLoader required')
    }
    if (!this.plasma) {
      this.plasma = new Plasma()
    }
    if (!this.supressListenOnProcessEvents) {
      process.on('SIGTERM', this.exitHandler.bind(this))
      process.on('SIGINT', this.exitHandler.bind(this))
      process.on('unhandledRejection', (err) => {
        this.unhandledRejectionHandler(err)
      })
    }
  }

  async loadDNA () {
    if (this.dnaLoader) {
      return this.dnaLoader(this.cellMode)
    }
    return loadDnaDefault({
      dnaSourcePaths: this.dnaSourcePaths,
      dnaMode: this.cellMode,
      beforeResolve: this.beforeResolve,
      afterResolve: this.afterResolve
    })
  }

  async start () {
    return new Promise(async (resolve, reject) => {
      if (!this.dna) {
        this.dna = await this.loadDNA()
      }
      if (!this.nucleus) {
        this.nucleus = new Nucleus(this.plasma, this.dna, this.cellRoot)
      }
      this.nucleus.build({branch: this.buildBranch}, (err, results) => {
        if (err) return reject(err)
        resolve(results)
      })
    })
  }

  async stop () {
    return this.plasma.emit(this.killChemical)
  }

  unhandledRejectionHandler (err) {
    throw err
  }

  async exitHandler () {
    await this.stop()
    process.exit(0)
  }
}
