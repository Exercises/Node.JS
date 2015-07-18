var http = require('http');
var qs   = require('querystring');
var responseString = "hello etag";
var hash = require("crypto").
                createHash("sha1")
                .update(responseString)
                .digest("base64");
var requestBody = "";
http.createServer(function (req, res) {

    console.log("req " + req.headers.stringify);
    if(req.headers['if-none-match'] == hash) {
        res.writeHead(304);
        res.end();
    }else {
       res.writeHead(200, {
       "Etag":hash
       });
       if(req.method == "POST") {
           console.log("post");
           req.on("data", function(data) {
               requestBody = requestBody + data;
           });
           req.on('end', function() {
               var post = qs.parse(requestBody);
               console.log(post);
           })
       }
       res.write(JSON.stringify(req.headers, null, 4));
       res.end();
    }
}).listen(1332); 

console.log('Server running at http://127.0.0.1:1332/');
