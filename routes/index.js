/*
* GET home page.
*/
module.exports = function(app) {

  var index = app.controllers.index;

  app.get('/index', index.search);
  console.log ("route index");
};
