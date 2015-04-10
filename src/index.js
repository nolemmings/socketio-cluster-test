'use strict';

var express = require('express');
var hbs = require('hbs');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var http = require('http');
var path = require('path');
var socketio = require('socket.io');

var config = require('./lib/config');
var mongo = require('./lib/mongo');
var socket = require('./lib/socket');
var requestHandlers = require('./lib/requestHandlers');

var app = express();

// Configure express4 server
app.engine('hbs', hbs.__express);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', requestHandlers.index);
app.post('/messages', requestHandlers.postMessage);
app.get('/messages', requestHandlers.getMessages);
app.delete('/messages', requestHandlers.deleteMessages);

// Start Express and Socket.io server
var server = http.createServer(app);
socket.init(server);

mongo.connect(config.get('mongodb.url'), function(err, db) {
    if (err) {
        return console.log(err);
    }
    console.log('Connected to MongoDB server on ' + config.get('mongodb.url'));
    server.listen(config.get('server.port'), function() {
        var host = server.address().address;
        console.log('Example app listening at http://%s:%s', host, config.get('server.port'));
    });
});
