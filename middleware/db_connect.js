var mongoose = require('mongoose')
  , single_connection
  , env_url = {
    "test": "mongodb://127.0.0.1/test",
    "development": "mongodb://127.0.0.1/test"
  }
;

module.exports = function() {
  var url = env_url[process.env.NODE_ENV];
  console.log("URLLLLLLLLL", url);

  if(!single_connection) {
    single_connection = mongoose.connect("mongodb://joao:joao@ds031957.mongolab.com:31957/dbteste");
    //single_connection = mongoose.connect("mongodb://127.0.0.1/test");
    //single_connection = mongoose.connect(url);
  }

  return single_connection;
};

