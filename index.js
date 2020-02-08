const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io')(server);
const chalk = require('chalk');
const log = console.log;


const port = process.env.PORT || 3000;



app.get('/', (req, res)=> {
    res.status(200).send('<h1> We gucci </h1>');
});


server.listen(port, () => {
    log(chalk.green('listening on port: ' + port));
  });




