var curl = require('../');

var assert = require('assert');

var o = {
  host: 'www.daveeddy.com',
  port: 80,
  method: 'GET',
  path: '/'
};

var curlopts = {
  verbose: true,
  headers: true,
  options: ['--data', 'test']
};

var u = curl.args(o, curlopts);
var s = curl.cmd(o, curlopts);

assert.deepEqual(u, [ 'curl', '-X', 'GET', '-v', '-i', '--data', 'test', 'http://www.daveeddy.com:80/' ]);
assert.deepEqual(s, 'curl -X GET -v -i --data test http://www.daveeddy.com:80/');
console.log(s);
