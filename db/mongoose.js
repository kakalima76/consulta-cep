var config = require('../config/cnn');
var mongoose = require('mongoose');
/*var debug    = require('debug')('users:db');*/
require('../models/users');
require('dotenv').load();

'use strict';
function _connection(){
    var username = config.username,
        password = config.password,
        server = config.server,
        port = config.port,
        database = config.database,
        auth = username ? username + ':' + password + '@' : '';
    return 'mongodb://' + auth + server + ':' + port + '/' + database;
}



// Using `mongoose.connect`...
var promise = mongoose.connect(_connection(), {
  useMongoClient: true,
  /* other options */
});

//depreciado...
/*
mongoose.connect(_connection());
var db = mongoose.connection;
db.on('error', function(err){
    console.error(err);
});

db.once('open', function(cb){
    console.log('connected to mongodb');
})*/

module.exports = mongoose;