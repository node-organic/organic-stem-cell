const path = require('path')

test('Cell instance starts and stops', async () => {
  const Cell = require('../lib/node')
  let instance = new Cell({
    dnaSourcePaths: [path.join(__dirname, './test-cell-server/dna')],
    buildBranch: 'build',
    cellRoot: path.join(__dirname, './test-cell-server')
  })
  let organelles = await instance.start()
  expect(organelles.serverOrganelle.listening).toBe(true)
  await instance.stop('kill')
  expect(organelles.serverOrganelle.listening).toBe(false)
})
