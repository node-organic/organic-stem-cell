const path = require('path')

test('Cell with custom loader', async () => {
  const Cell = require('../lib/node')
  let instance = new Cell({
    dnaLoader: async function (mode) {
      return {
        build: {
          'serverOrganelle': {
            'source': './organelles/server',
            'killOn': 'kill'
          }
        }
      }
    },
    cellRoot: path.join(__dirname, './test-cell-server'),
    supressListenOnProcessEvents: true
  })
  await instance.start()
  expect(instance.plasma.serverListening).toBe(true)
  await instance.stop()
})
