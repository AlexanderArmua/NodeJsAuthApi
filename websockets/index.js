const express = require('express');
const logger = require('../utils/logger');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = 8080;

app.use(express.static('public'));

io.on('connection', (socket) => {
    logger.info('Nuevo cliente conectado');
    socket.emit('mensaje', 'Bienvenido');
})

let numeroDeMensaje = 1;
setInterval( () => {
    io.emit('mensaje', 'Mensaje enviado: ' + numeroDeMensaje++);
}, 3000)

server.listen(PORT, () => {
  logger.info(`Servidor iniciado en el puerto: http://localhost:${PORT}`);
})
