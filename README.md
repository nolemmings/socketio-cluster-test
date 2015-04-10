# socketio express4 test

This quick prototype combines a REST API with a socket connection in a clustered Node.js environment. Data is stored in MongoDB while socket.io session management is done in Redis.

## Run

First install both [Docker](https://www.docker.com) and [Docker Compose](https://docs.docker.com/compose/).

When you have a working Docker and Compose setup you should be able to run the environment using:

```
docker-compose up
```

This starts two node.js servers, a MongoDB server and a Redis server.

If you're using a non-linux OS, make sure ports `3000`, `3001`, `6379` and `27017` are being forwarded in your VM. For Mac OS X, check [here](https://github.com/boot2docker/boot2docker/blob/master/doc/WORKAROUNDS.md) how to do this for [boot2docker](http://boot2docker.io/).

When Docker Compose is running open `http://localhost:3000` and `http://localhost:3001` in your web browser and check experiment!
