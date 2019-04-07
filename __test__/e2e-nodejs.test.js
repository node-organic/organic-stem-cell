const path = require('path')

test('Cell instance starts and stops with dna loading', async () => {
  const Cell = require('../lib/node')
  let instance = new Cell({
    dnaSourcePaths: [path.join(__dirname, './test-cell-server/dna')],
    cellRoot: path.join(__dirname, './test-cell-server'),
    supressListenOnProcessEvents: true
  })
  let organelles = await instance.start()
  expect(organelles.serverOrganelle.listening).toBe(true)
  await instance.stop()
  expect(organelles.serverOrganelle.listening).toBe(false)
})

test('Cell instance starts and stops with pre-loaded dna', async () => {
  const Cell = require('../lib/node')
  let instance = new Cell({
    dna: {
      'build': {
        'serverOrganelle': {
          'source': './organelles/server',
          'killOn': 'kill'
        }
      }
    },
    cellRoot: path.join(__dirname, './test-cell-server'),
    supressListenOnProcessEvents: true
  })
  let organelles = await instance.start()
  expect(organelles.serverOrganelle.listening).toBe(true)
  await instance.stop()
  expect(organelles.serverOrganelle.listening).toBe(false)
})
