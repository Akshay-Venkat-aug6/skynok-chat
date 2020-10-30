const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');
const { addMessage } = require('./app/controller/messageController');
// Module-Alias
require('module-alias/register');
require('@/db');

// Custom Module
const router = require('@/microservices/router');

const PORT = 3001;

const app = express();

const server = http.createServer(app);
const io =  socketio(server);

io.on('connection', (socket) => {
  socket.on('sendMessage', ({message, from, to}) => {
    let messageDetails = {
      message,
      from, to
    };
    // console.log(message, from, to)
    addMessage(messageDetails)
  });

  socket.on('disconnect', () => {
    console.log('User had left!!!!')
  });

});

app.use(bodyParser.json())
app.use(cors())
app.use(router)

server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`)
});