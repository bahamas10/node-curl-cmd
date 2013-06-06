var curl = require('../');

var assert = require('assert');

var o = {
  host: 'www.daveeddy.com',
  port: 80,
  method: 'GET',
  headers: {
    'User-Agent': 'Internet Explorer',
    'X-Something': null,
    'X-Auth': 'test'
  },
  path: '/'
};

var u = curl.args(o);
var s = curl.cmd(o);

assert.deepEqual(u, [ 'curl', '-X', 'GET', '-H', 'User-Agent: Internet Explorer', '-H', 'X-Something;', '-H', 'X-Auth: test', 'http://www.daveeddy.com:80/' ]);
assert.deepEqual(s, 'curl -X GET -H \'User-Agent: Internet Explorer\' -H \'X-Something;\' -H \'X-Auth: test\' http://www.daveeddy.com:80/');
console.log(s);
