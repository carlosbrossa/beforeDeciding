module.exports = function(app) {

var	http = require('http'),
    fs = require('fs'),
    util = require('util'),
    url = require('url');


  var indexController = {
    search : function(req, res) {
      console.log('index controller');
      if(url.parse(req.url).pathname == '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        var rs = fs.createReadStream('public/index.html');
        util.pump(rs, res);
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        var rs = fs.createReadStream('404.html');
        util.pump(rs, res);
    	}
      //teste(req, res);    
    },

  }
  return indexController;

};
