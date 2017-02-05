const Hapi = require('hapi');
const Inert = require('inert');
const routes = require('./routes.js');

const server = new Hapi.server();

server.register(Inert, () => {
  server.connection({
    port: process.env.PORT || 7000
  });

  server.route(routes);
});

module.exports = server;
