var curl = require('../');
var url = require('url');

var assert = require('assert');

var o = 'http://www.daveeddy.com:95/somepath?name=dave&age=24';

var u = curl.args(o);
var s = curl.cmd(o);

assert.deepEqual(u, [ 'curl', '-X', 'GET', 'http://www.daveeddy.com:95/somepath?name=dave&age=24' ]);
assert.deepEqual(s, 'curl -X GET \'http://www.daveeddy.com:95/somepath?name=dave&age=24\'');
console.log(s);
