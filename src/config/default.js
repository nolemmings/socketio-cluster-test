'use strict';

var os = require('os');

module.exports = {
    "env": {
        "doc": "The applicaton environment.",
        "format": ["development", "test", "production"],
        "default": "development",
        "env": "NODE_ENV"
    },
    "server": {
        "name": {
            "doc": "The server name.",
            "default": process.pid + "",
            "env": "SERVER_NAME"
        },
        "port": {
            "doc": "The port to bind to.",
            "format": "port",
            "default": 3000,
            "env": "SERVER_PORT"
        }
    },
    "mongodb": {
        "url": {
            "doc": "The mongodb connection uri.",
            "format": "*",
            "default": "mongodb://localhost:27017/socketio_test",
            "env": "MONGODB_URL"
        }
    }
};
