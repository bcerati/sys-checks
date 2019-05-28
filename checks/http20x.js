const ping = require('ping');

const { exitWithFailure } = require('../tools');

module.exports = function (args) {
  const hosts = args.http20xHosts ? args.http20xHosts.split(';') : []; // coma separated

  hosts.forEach(function (host) {
    ping.sys.probe(host, function(isAlive) {

      if (!isAlive) {
        console.log(`${host} does not seem to respond!`);
        exitWithFailure();
      }
    }, {
      timeout: 10,
      extra: ['-i 2'],
    });
  });
};
