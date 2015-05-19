var curl = require('../');

var assert = require('assert');

var o = {
  host: 'www.daveeddy.com',
  method: 'DELETE',
  path: '/'
};
var curlopts = {
  ssl: true
};

var u = curl.args(o, curlopts);
var s = curl.cmd(o, curlopts);

assert.deepEqual(u, [ 'curl', '-X', 'DELETE', 'https://www.daveeddy.com:443/' ]);
assert.deepEqual(s, "curl -X DELETE 'https://www.daveeddy.com:443/'");
console.log(s);
