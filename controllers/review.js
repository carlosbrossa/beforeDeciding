

module.exports = function(app) {

  var http = require('http');

   //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
  var options = {
    host: 'api.walmartlabs.com',
    path: '/v1/search?format=json&apiKey=j3sp77bmf7ywymrdx78dq6bj'
  };

  var callback = function(response) {
    var str = '';
    console.log('3');
  //another chunk of data has been recieved, so append it to `str`
     response.on('data', function (chunk) {
      str += chunk;
     });

  //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      console.log(str);
    });
  }

  

  var teste = function(req, res){

    options.path = options.path + '&query=' + req.product;      
    console.log('2', options.path);
    http.get(options, callback).end();  
  };

  app.param('product', function(req, res, next, product) {  
    req.product = product;
    next();
  });
  

  var ReviewController = {
    search : function(req, res) {
      console.log('1');
      teste(req, res);
	/*Joke.findOne(function(err, jokeFind){
		res.status(200);
		res.send(jokeFind);
	});	*/
    }
  }
  return ReviewController;

};

