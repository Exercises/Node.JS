var http = require('http');

http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      if(req.method == 'POST')
         res.end('Hello World POST\n');
      else if(req.method == 'GET') {
         res.end("GETTing you haha");
      }
}).listen(1339, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1339');
