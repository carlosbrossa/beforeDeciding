module.exports = function(app) {

  var http = require('http');
  var cheerio = require('cheerio');

  app.param('product', function(req, res, next, product) {  
    req.product = product;
    next();
  });

  app.param('idProduct', function(req, res, next, idProduct) {  
    req.idProduct = idProduct;
    next();
  });

  var buscarProduto = function(req, res){
    
    var options = {
      host: 'sandbox.buscape.com.br',
      path: '/service/findProductList/3453566e4234422f4430593d/BR?sort=rate&format=json'
    };
    options.path = options.path + '&keyword=' + req.product;    

    var page = req.param('page');
    var numItems = req.param('numItems');    
    if(page) options.path = options.path + '&page=' + page;    
    if(numItems) options.path = options.path + '&results=' + numItems;        
    
    http.get(options, function(response) {
      var str = '';

      response.on('data', function (chunk) {
       str += chunk;
      });

      response.on('end', function () {
      	str = JSON.parse(str);
      	var items = str.product;      	
      	var listProducts = new Array();              

      	for(var i = 0; i < items.length; i++){	
          var item = items[i].product;          
	        var objProduct = new Object();	        
	        objProduct.itemId = item.id;
	        objProduct.name = item.productname;
	        objProduct.shortDescription = item.productshortname;
	        objProduct.thumbnailImage = item.thumbnail.formats[0].formats.url;
	        objProduct.productUrl = item.links[0].link.url;
	        objProduct.affiliateAddToCartUrl = item.links[0].link.url;
	        listProducts.push(objProduct);        
        }        

        var objectReturn = new Object();
        objectReturn.totalResults = str.totalresultsavailable;
        objectReturn.page = str.page;
        objectReturn.totalpages = str.totalpages;
        objectReturn.totalresultsreturned = str.totalresultsreturned;
        objectReturn.items = listProducts;
        res.send(objectReturn);

      });
    }).end();  
  }; 


   var buscarReview = function(req, res){
    var optionsReview = {
      host: 'sandbox.buscape.com.br',
      path: '/service/viewUserRatings/3453566e4234422f4430593d/BR?format=json'
    };
    optionsReview.path = optionsReview.path.concat('&productId=' + req.idProduct); 
    
    http.get(optionsReview, function(response) {

      var str = '';    
      response.on('data', function (chunk) {
       str += chunk;
      });

      response.on('end', function () {        
        str = JSON.parse(str);                
        scrapingReview(str, res);
        //res.json(str);
      });

    }).end();  
    
  };

  var scrapingBuscape = function(url, res){
    var optionsBuscape = {
      host: 'www.buscape.com.br',
      path: ''
    };

    var path = url.replace('http://www.buscape.com.br', '');
    optionsBuscape.path = path.concat('?#avaliacoes');    

    http.get(optionsBuscape, function(response) {

      var str = '';    
      response.on('data', function (chunk) {
       str += chunk;
      });

      response.on('end', function () {                
        parserHtml(str, res);    
      });

    }).end();  
  } 

  var parserHtml = function(html, res){
    var $ = cheerio.load(html, {
      normalizeWhitespace: false,
      xmlMode: false,
      decodeEntities: true
    });

    var commentsJson = new Array();
    $('.descr').each(function(i, elem) {      
      var comment = new Object();
      comment.comment =  $(this).text();
      commentsJson.push(comment);
    });
    

    /**var arrayComments = resultfinal.split('<p class="descr">');
    var commentsJson = new Array();

    for (var i = arrayComments.length - 1; i >= 0; i--) {
      var comment = new Object();
      comment.comment =  arrayComments[i].replace('</p>', '');
      commentsJson.push(comment);
    };**/

    res.json(commentsJson);

  }

  var scrapingReview = function(str, res){

    var teste = str.product[0].product.links[0].link.url;
    var index = teste.split('?');
    var urlFinal = index[0];     
    scrapingBuscape(urlFinal, res);

  };


  var ProductController = {
    search : function(req, res) {      
      buscarProduto(req, res);    
    },
    review : function(req, res){
      buscarReview(req, res);    
    }
  }
  return ProductController;

}