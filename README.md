curl-cmd
========

Generate a curl command line argument list from an http request object

Install
-------

    npm install curl-cmd

Example
-------

Taken from the [Node.JS](http://nodejs.org) example for an HTTP get request

``` js
var http = require('http');
var curl = require('curl-cmd');

var options = {
  hostname: 'ifconfig.me',
  port: 80,
  path: '/ip',
  method: 'GET'
};

console.log('=> %s', curl.cmd(options));

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();
```

The line `curl.cmd(options)` is the interesting part as that will generate
the curl command seen in the output

```
=> curl -X GET http://ifconfig.me:80/ip
STATUS: 200
HEADERS: {"date":"Thu, 06 Jun 2013 16:56:30 GMT","server":"Apache","vary":"Accept-Encoding","connection":"close","transfer-encoding":"chunked","content-type":"text/plain"}
BODY: 8.8.8.8
```

### Simple Example

``` js
> var curl = require('curl-cmd')
undefined

> curl.cmd('http://www.daveeddy.com/something')
'curl -X GET http://www.daveeddy.com/something'

> curl.cmd({host: 'daveeddy.com', port: 8080, method: 'DELETE', path: '/data/something'})
'curl -X DELETE http://daveeddy.com:8080/data/something'

> curl.cmd({host: 'daveeddy.com', port: 8080, method: 'DELETE', path: '/data/something', headers: { 'User-Agent': 'Internet Explorer'} })
'curl -X DELETE -H \'User-Agent: Internet Explorer\' http://daveeddy.com:8080/data/something'

> curl.cmd({host: 'daveeddy.com', port: 8080, method: 'DELETE', path: '/data/something', headers: { 'User-Agent': 'Internet Explorer'}, auth: 'dave:secret' })
'curl -X DELETE -u dave:secret -H \'User-Agent: Internet Explorer\' http://daveeddy.com:8080/data/something'

> curl.cmd({host: 'daveeddy.com', port: 8080, method: 'PUT', path: '/data/something', headers: { 'User-Agent': 'Internet Explorer'}, auth: 'dave:secret' }, {ssl: true, verbose: true})
'curl -X PUT -u dave:secret -H \'User-Agent: Internet Explorer\' -v https://daveeddy.com:8080/data/something'
```
Usage
-----

Pass in a URI as a string, a `url.parsed()` object, or an object suitable for
making an HTTP request as the first argument to get the curl command.

### `curl.cmd(options, curlopts={})`

This returns a stringified curl command suitable for running on the shell

### `curl.args(options, curlopts={})`

Same as above, except returns an array of separate arguments to use for the curl command

### `curlopts`

The optional second argument is used to pass options to curl

- `curlopts.ssl`: set to `true` to use HTTPS instead of HTTP, defaults to `false`
- `curlopts.verbose`: set to `true` to add `-v` to the curl command, defaults to `false`
- `curlopts.headers`: set to `true` to add `-i` to the curl command, defaults to `false`
- `curlopts.options`: an optional array of arguments to add to the curl command, defaults to `[]`

License
-------

MIT
