module.exports = function(app) {

  var db = require('../middleware/db_connect')();
  var Schema = require('mongoose').Schema;

  var joke =  Schema({
    owner: { type: String},
    description: {type: String},
    title: {type: String},
    date_creation: {type: Date},
    likes: {type: Number}
  });


  return db.model('joke', joke);
};


