'use strict';

var socketio = require('socket.io');
var redis = require('socket.io-redis');
var config = require('./config')

var io = null;

module.exports.init = function(server) {
    io = socketio.listen(server);
    io.adapter(redis(config.get('redis.url')));
    io.on('connection', function(socket) {
        console.log('A user connected');
    });
}

module.exports.newMessage = function(message) {
    console.log('Broadcasting message ', message);
    io.emit('newMessage', JSON.stringify(message));
}
