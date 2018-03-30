const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

module.exports = class ServerOrganelle {
  constructor (plasma, dna) {
    const server = http.createServer((req, res) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('Hello World\n')
    })

    server.listen(port, hostname, () => {
      this.listening = true
    })

    plasma.on(dna.killOn, (c, callback) => {
      server.close(() => {
        this.listening = false
        callback()
      })
    })
  }
}
