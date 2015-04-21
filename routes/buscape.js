module.exports = function(app) {

  var product = app.controllers.buscape;

  app.get('/produto/:product', product.search);
  app.get('/produto/review/:idProduct', product.review);
};

