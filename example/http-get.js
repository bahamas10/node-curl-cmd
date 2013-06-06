var http = require('http');
var curl = require('../');

var options = {
  hostname: 'ifconfig.me',
  port: 80,
  path: '/ip',
  method: 'GET'
};

var cmd = curl.cmd(options);
console.log(cmd);

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();
