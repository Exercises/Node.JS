var express = require('express')
var multer  = require('multer')
var app = express()


app.get('/', function (req, res) {
      res.send('Hello World!');
});

app.get('/imageinfo', function(req, res) {
      res.send('ImageInfo is');
});

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
