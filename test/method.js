var curl = require('../');

var assert = require('assert');

var o = {
  host: 'www.daveeddy.com',
  port: 80,
  method: 'DELETE',
  path: '/'
};

var u = curl.args(o);
var s = curl.cmd(o);

assert.deepEqual(u, [ 'curl', '-X', 'DELETE', 'http://www.daveeddy.com:80/' ]);
assert.deepEqual(s, 'curl -X DELETE http://www.daveeddy.com:80/');
console.log(s);
