test('Cell instance starts async', async () => {
  const Cell = require('../lib/browser')
  let instance = new Cell({
    dna: {
      build: {
        organelle1: {
          source: class Organelle1 {
            constructor (plasma, dna) {
              plasma.initiated = true
            }
          }
        }
      }
    },
    buildBranch: 'build'
  })
  await instance.start()
  expect(instance.plasma.initiated).toBe(true)
})
