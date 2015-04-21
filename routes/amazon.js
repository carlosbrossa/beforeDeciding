module.exports = function(app) {

  var amazon = app.controllers.amazonTest;
  
  app.get('/amazon/:product', amazon.amazon);
};

