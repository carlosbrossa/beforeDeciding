/*
* GET home page.
*/
//exports.index = function(req, res){
//res.render('index', { title: 'Express' })
//};


module.exports = function(app) {

  var index = app.controllers.index;

  app.get('/', index.search);
};
