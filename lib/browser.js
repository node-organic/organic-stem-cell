const Nucleus = require('organic-nucleus')
const Plasma = require('organic-plasma')

module.exports = class Cell {
  constructor ({dna, cellBranch, defaultKillChemical} = {}) {
    this.defaultKillChemical = defaultKillChemical
    this.dna = dna
    if (!this.dna) throw new Error('dna required')
    this.cellBranch = cellBranch
    if (!this.cellBranch) throw new Error('cellBranch required')
    this.plasma = new Plasma()
  }

  async start () {
    return new Promise((resolve, reject) => {
      // # construct core
      let nucleus = new Nucleus(this.plasma, this.dna)
      nucleus.build({branch: this.cellBranch}, (err, results) => {
        if (err) return reject(err)
        resolve(results)
      })
    })
  }

  async stop (killChemical) {
    killChemical = killChemical || this.defaultKillChemical
    return new Promise((resolve, reject) => {
      this.plasma.emitAndCollect(killChemical, (err, results) => {
        if (err) return reject(err)
        resolve(results)
      })
    })
  }
}
