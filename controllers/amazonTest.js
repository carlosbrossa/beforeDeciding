

module.exports = function(app) {

  var http = require('http');
  
  //refatorar a passar para um servico separado
  var aws = require("aws-lib");
  var accessKeyId = "AKIAI6Z6PT3MZYS4ZKLA";
  var secretAccessKey = "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";
  var associateTag = "beforedecidin-20";
  var prodAdv = aws.createProdAdvClient(accessKeyId, secretAccessKey, associateTag);


  var buscarProduto = function(product, res){

    //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    var options = {
      host: 'api.walmartlabs.com',
      path: '/v1/search?format=json&apiKey=j3sp77bmf7ywymrdx78dq6bj'
    };
    options.path = options.path + '&query=' + product;

    http.get(options, function(response) {
      var str = '';

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
       str += chunk;
      });

      //the whole response has been recieved, so we just print it out affiliateAddToCartUrle
      response.on('end', function () {
        var objProduct = new Object();
        str = JSON.parse(str);        
        objProduct.itemId = str.items[0].itemId;
        objProduct.name = str.items[0].name;
        objProduct.shortDescription = str.items[0].shortDescription;
        objProduct.thumbnailImage = str.items[0].thumbnailImage;
        objProduct.productUrl = str.items[0].productUrl + '&country=US';
        objProduct.affiliateAddToCartUrl = str.items[0].affiliateAddToCartUrl + '&country=US';
        
        console.log('objReview', objProduct);  
        buscarReview(res, objProduct);

        //res.send(objReview);
      });
    }).end();  
  }; 

  var buscarReview = function(res, objProduct){
    var optionsReview = {
      host: 'api.walmartlabs.com',
      path: '/v1/reviews/itemId?format=json&apiKey=j3sp77bmf7ywymrdx78dq6bj'
    };
    optionsReview.path = optionsReview.path.replace('itemId', objProduct.itemId);
    http.get(optionsReview, function(response) {

      var str = '';

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
       str += chunk;
      });

      response.on('end', function () {        
        str = JSON.parse(str);
        objProduct.reviews = str.reviews;

        //res.send(objProduct);
	      res.json(objProduct);
      });

    }).end();  
    
  };

  var teste = function(req, res){
    //options.path = options.path + '&query=' + req.product;
    //console.log(options.path);        
    buscarProduto(req.product, res);
  };

  var amazon = function(req, res){
    prodAdv.call("ItemSearch", {SearchIndex: "Books", Keywords: "Javascript"}, function(err, result) {
      res.status(200);
      res.send(result);      
    });
  }

  app.param('product', function(req, res, next, product) {  
    req.product = product;
    next();
  });
  

  var ReviewController = {
    search : function(req, res) {
      console.log('1');
      teste(req, res);    
    },
    amazon : function(req, res) {
      console.log('1');
      amazon(req, res);
    }


  }
  return ReviewController;

};

