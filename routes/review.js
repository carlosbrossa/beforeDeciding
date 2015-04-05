module.exports = function(app) {

  var review = app.controllers.review;

  app.get('/review/:product', review.search);
  app.get('/amazon/:product', review.amazon);
};

