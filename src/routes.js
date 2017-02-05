const home = require('./handlers/home.js');
const routes = require('./handlers/static-file.js');

module.exports = [
   { method: 'GET', path: '/', handler: home },
   { method: 'GET', path: '/{path*}', handler: staticFile}
];
