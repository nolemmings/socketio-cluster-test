'use strict';

var db = require('./mongo');
var config = require('./config');
var socket = require('./socket');

module.exports.index = function(req, res) {
    res.render('index', {
        title: 'Express'
    });
};

module.exports.postMessage = function(req, res, next) {
    console.log('POST /message', req.body);
    var message = {
        message: req.body.message,
        created: new Date(),
        server: config.get('server.name')
    }
    db.collection('messages').insert(message, function(err, doc) {
        res.status(201).json(message);
        socket.newMessage(message);
        next();
    });
};

module.exports.getMessages = function(req, res, next) {
    var query = {}
    var sort = { created: 1 };
    db.collection('messages').find(query).sort(sort).toArray(function(err, results) {
        res.status(200).json(results);
        next();
    });
}

module.exports.deleteMessages = function(req, res, next) {
    db.collection('messages').remove({}, function(err, results) {
        res.status(200).end();
        next();
    });
}
