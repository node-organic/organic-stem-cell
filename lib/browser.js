const Nucleus = require('organic-nucleus/lib/nucleus-browser')
const Plasma = require('organic-plasma')

module.exports = class Cell {
  constructor (options) {
    Object.assign(this, {
      killChemical: 'kill',
      buildBranch: 'build'
    }, options)
    if (!this.dna) throw new Error('dna required')
    if (!this.plasma) {
      this.plasma = new Plasma()
    }
    if (!this.nucleus) {
      this.nucleus = new Nucleus(this.plasma, this.dna)
    }
  }

  async start () {
    return new Promise((resolve, reject) => {
      this.nucleus.build({branch: this.buildBranch}, (err, results) => {
        if (err) return reject(err)
        resolve(results)
      })
    })
  }

  async stop () {
    return this.plasma.emit(this.killChemical)
  }
}
