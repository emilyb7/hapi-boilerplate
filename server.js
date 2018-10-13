/* eslint-disable no-console */
const hapi = require('hapi')
const inert = require('inert')

const server = new hapi.Server()

server.register([ inert, ], err => {
  if (err) {
    console.error(err)
  }

  server.connection({ port: process.env.PORT || 7000, })

  server.route(require('./src/routes.js'))

  server.start(() => {
    console.log(`Server running at: ${server.info.uri}`)
  })
})

module.exports = server
