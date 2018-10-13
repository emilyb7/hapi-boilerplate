const test = require('tape')
const server = require('../server.js')

test('/ returns 200 statusCode', async t => {
  t.plan(1)

  const res = await server.inject({ url: '/' })
  t.equal(res.statusCode, 200, 'page should load successfully')
  server.stop()
})

test('/styles/main.css returns 200 statusCode', async t => {
  t.plan(1)
  const res = await server.inject({ method: 'GET', url: '/styles/main.css' })
  t.equal(res.statusCode, 200, 'should send static file')
  server.stop()
})
