const socketIO = require('socket.io');
const socket = {};

function connect(server) {
  socket.io = socketIO(server);

  socket.io.on('connection', (socket) => {
    console.log('New client connected');
    socket.emit('message', 'Welcome');
    socket.emit('message', 'You can save the variable socket to know when send a message to the server');
    socket.emit('message', 'For example if the same server is being used for server for many games');
  });
}

function emitMessage(message) {
  socket.io.emit('message', message);
}

function emitLogin(user) {
  socket.io.emit('login', `${user.email} logged in the server`);
}

module.exports = {
  connect,
  socket,
  emitLogin,
  emitMessage
}
