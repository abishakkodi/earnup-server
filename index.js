const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const chalk = require('chalk');
const log = console.log;

const port = process.env.PORT || 3000;



app.get('/', (req, res)=> {
    res.status(200).send('<h1> Server is Running </h1>');
});

io.on('connection', (socket)=> {
    socket.on('chat-message', (payload)=> {

        io.emit('chat-message', payload)
    });
});

server.listen(port, () => {
    log(chalk.green('listening on port: ' + port));
  });




