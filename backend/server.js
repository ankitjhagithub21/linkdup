const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.ORIGIN,
    credentials: true,
  },
});



// Socket.IO setup
io.on('connection', (socket) => {
  console.log("A user connected:", socket.id);

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});



module.exports = {server,io,app}