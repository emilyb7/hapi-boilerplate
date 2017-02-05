module.exports = [
   { method: 'GET', path: '/', handler: home },
   { method: 'GET', path: '/{path*}', handler: staticFile}
];
