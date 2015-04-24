

module.exports = function(app) {

  var http = require('http');

  var buscarReview = function(productId, res){
    var optionsReview = {
      host: 'api.walmartlabs.com',
      path: '/v1/reviews/itemId?format=json&apiKey=j3sp77bmf7ywymrdx78dq6bj'
    };
    optionsReview.path = optionsReview.path.replace('itemId', productId);
    http.get(optionsReview, function(response) {

      var str = '';    
      response.on('data', function (chunk) {
       str += chunk;
      });

      response.on('end', function () {        
        str = JSON.parse(str);        
	      res.jsonp(str.reviews);
      });

    }).end();  
    
  };  

  app.param('idProduct', function(req, res, next, idProduct) {  
    req.idProduct = idProduct;
    next();
  });
  

  var ReviewController = {
    search : function(req, res) {
      buscarReview(req.idProduct, res);    
    }

  }
  return ReviewController;

};

