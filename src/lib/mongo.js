'use strict';

var MongoClient = require('mongodb').MongoClient;

var connection = null;

module.exports.connect = function(url, callback) {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            return callback(err);
        }
        connection = db;
        callback(null, connection);
    });
};

module.exports.collection = function(name) {
    return connection.collection(name);
};
