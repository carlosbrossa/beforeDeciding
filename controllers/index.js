module.exports = function(app) {

var	http = require('http'),
    fs = require('fs'),
    util = require('util'),
    url = require('url');


  var indexController = {
    search : function(req, res) {
      console.log('index controller');
      if(url.parse(req.url).pathname == '/index') {
        //res.writeHead(200,{'Content-Type':'text/plain'});
        //res.end('Hello World\n');
   
        //res.writeHead(200, {'content-type': 'text/html'});
        //res.render('index', { title: 'Express' })
        //res.redirect('../public/pagereview.html');
        //var rs = fs.readableStream.pipe('http://localhost:5600/pagereview.html');
        //util.pump(rs, res);
        //res.writeHead(200, {'Content-Type': 'text/html'});
        //res.write('Thank you your data has been posted.');
        //res.render('http://localhost:5600/pagereview.html');
        //res.end();
  
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        var rs = fs.createReadStream('404.html');
        console.log ("pagina nao encontrada ");
        util.pump(rs, res);
    	}
      //teste(req, res);    
    },

  }
  return indexController;

};
