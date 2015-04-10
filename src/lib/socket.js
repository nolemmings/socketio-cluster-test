'use strict';

var socketio = require('socket.io');

var io = null;

module.exports.init = function(server) {
    io = socketio.listen(server);
    io.on('connection', function(socket) {
        console.log('A user connected');
    });
}

module.exports.newMessage = function(message) {
    console.log('Broadcasting message ', message);
    io.emit('newMessage', JSON.stringify(message));
}
