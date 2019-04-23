const {spawn} = require('child_process')

test('Cell process SIGINT events', (done) => {
  let child = spawn('node', ['./test-cell-server/main'], {
    cwd: __dirname,
    env: process.env
  })
  child.stderr.on('data', v => console.log(v.toString()))
  child.stdout.on('data', v => console.log(v.toString()))
  child.on('exit', function (status) {
    expect(status).toBe(0)
    done()
  })
  setTimeout(function () {
    child.kill()
  }, 100)
})
