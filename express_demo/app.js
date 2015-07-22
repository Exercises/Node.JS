var express = require('express')
var multer  = require('multer')
var compression = require('compression')
var app = express()

app.use(compression({filter:shouldCompress}), function(req, res){
    console.log(req.baseUrl);
    console.log("eehhfle")
    res.end()
}) 

app.get('/', function (req, res) {
      res.send('Hello World!');
});

app.get('/imageinfo', function(req, res) {
      res.send('ImageInfo is');
});

app.get('/baidu', function(req, res) {
  res.redirect("http://baidu.com")
});


function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }
    console.log(req.baseUrl)
   // fallback to standard filter function
   return compression.filter(req, res)
}

app.use(multer({dest:'./uploads/'}), function(req, res, next) {
    console.log(req.body)
    console.log(req.files)
    res.end()
})

var server = app.listen(3000, function () {
      var host = server.address().address;
        var port = server.address().port;

          console.log('Example app listening at http://%s:%s', host, port);
});
