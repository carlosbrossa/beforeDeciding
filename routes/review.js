module.exports = function(app) {
  var review = app.controllers.review;

  app.get('/review/:idProduct', review.search);
  
};

