module.exports = function(app) {

  var http = require('http');

  app.param('product', function(req, res, next, product) {  
    req.product = product;
    next();
  });

  var buscarProduto = function(product, res){
    
    var options = {
      host: 'api.walmartlabs.com',
      path: '/v1/search?format=json&apiKey=j3sp77bmf7ywymrdx78dq6bj'
    };
    options.path = options.path + '&query=' + product;    

    http.get(options, function(response) {
      var str = '';

      response.on('data', function (chunk) {
       str += chunk;
      });

      response.on('end', function () {
      	str = JSON.parse(str);
      	var items = str.items;      	
      	var listProducts = new Array();        

      	for(var i = 0; i < items.length; i++){	
	        var objProduct = new Object();	        
	        objProduct.itemId = items[i].itemId;
	        objProduct.name = items[i].name;
	        objProduct.shortDescription = items[i].shortDescription;
	        objProduct.thumbnailImage = items[i].thumbnailImage;
	        objProduct.productUrl = items[i].productUrl + '&country=US';
	        objProduct.affiliateAddToCartUrl = items[i].affiliateAddToCartUrl + '&country=US';	        
	        listProducts.push(objProduct);        
        }        
        res.send(listProducts);
      });
    }).end();  
  }; 


  var ProductController = {
    search : function(req, res) {      
      buscarProduto(req.product, res);    
    }
  }
  return ProductController;

}