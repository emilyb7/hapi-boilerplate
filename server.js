/* eslint-disable no-console */
const hapi = require('hapi')
const inert = require('inert')

const PORT = process.env.PORT || 7000

const server = new hapi.Server({ port: PORT })
;(async function() {
  await server.register(inert)
  server.route(require('./src/routes.js'))
  await server.start()
  console.log('🥨', `server running on ${PORT}`)
})()

module.exports = server
