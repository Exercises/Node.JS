var express = require('express')
var multer  = require('multer')
var compression = require('compression')
var app = express()
var util = require('util')
/*
app.use(compression({filter:shouldCompress}), function(req, res){
    console.log(req.baseUrl);
    console.log("eehhfle")
    res.end()
}) 
*/

app.get('/share', function(req, res) {
    console.log('share');
    var walk    = require('walk');
    var files   = {}
    // Walker options
    var walker  = walk.walk('/home/juude/share', { followLinks: false  });
    walker.on('file', function(root, stat, next) {
     // Add this file to the list of files
        files[root + '/' + stat.name]= stat.name;
        next();
    });

    walker.on('end', function() {
        console.log(files);
	//files.forEach(function(value, key, map) {
	//    //<a href='sfdsdfsfas'>file</a>
	//    console.log("sfdd" + value + "  " + key);
        //    res.writeln(util.format('<a href="%s">%s</a>', key, value));
	//});
	for(key in files) {
	    console.log("ｋｅｙ" + key);
	    res.write(util.format('<a href="/static/%s">%s</a><br/>\n', files[key], files[key]));
	}
	res.end();
   });
});

app.use('/static', express.static('/home/juude/share'))

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
