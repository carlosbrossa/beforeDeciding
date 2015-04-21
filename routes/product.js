module.exports = function(app) {

  var product = app.controllers.product;

  app.get('/product/:product', product.search);
  
};

