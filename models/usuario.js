module.exports = function(app) {

  var db = require('../middleware/db_connect')();
  var Schema = require('mongoose').Schema;

  var usuario =  Schema({
    id_user: { type: String},
    view_joke: [{type: String}]
  });


  return db.model('usuario', usuario);
};

