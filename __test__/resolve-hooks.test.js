const path = require('path')

test('Cell instance before/after resolve hooks', async () => {
  const Cell = require('../lib/node')
  let instance = new Cell({
    dnaSourcePaths: [path.join(__dirname, './test-cell-server/dna')],
    cellRoot: path.join(__dirname, './test-cell-server'),
    supressListenOnProcessEvents: true,
    beforeResolve: function (dna) {
      dna.beforeResolve = true
      return dna
    },
    afterResolve: function (dna) {
      dna.afterResolve = true
      return dna
    }
  })
  await instance.start()
  expect(instance.dna.beforeResolve).toBe(true)
  expect(instance.dna.afterResolve).toBe(true)
  await instance.stop()
})
