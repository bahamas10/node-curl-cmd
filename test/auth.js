var curl = require('../');

var assert = require('assert');

var o = {
  host: 'www.daveeddy.com',
  port: 80,
  method: 'POST',
  auth: 'dave:secret',
  path: '/'
};

var u = curl.args(o);
var s = curl.cmd(o);

assert.deepEqual(u, [ 'curl', '-X', 'POST', '-u', 'dave:secret', 'http://www.daveeddy.com:80/' ]);
assert.deepEqual(s, 'curl -X POST -u dave:secret http://www.daveeddy.com:80/');
console.log(s);
