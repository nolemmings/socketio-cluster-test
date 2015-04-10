# socketio express4 test

**Work in progress**

This prototype combines a REST API with a socket connection in a clustered Node.js environment. Data is stored in MongoDB while socket.io session management is done in Redis.

## Starting application

You require [Docker](https://www.docker.com) and [Docker Compose](https://docs.docker.com/compose/).

After having installed these, you should get things started by running:

```
docker-compose up
```

If you're using a non-linux OS, make sure ports `3000`, `3001`, and `27017` are being forwarded in your VM. For Mac OS X, check [here](https://github.com/boot2docker/boot2docker/blob/master/doc/WORKAROUNDS.md) how to do this in [boot2docker](http://boot2docker.io/).
