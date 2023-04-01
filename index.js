const { config } = require('./config/config');
const logger = require('./utils/logger');

const express = require('express');
const app = express();
const server = require('http').Server(app);

const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const corsHandler = require('./middlewares/cors.handler');

// Connect to socket
const socket = require('./socket');
socket.connect(server);

// Allow to receive JSON
app.use(express.json());

// Enable CORS
app.use(corsHandler());

// Enable login security and JWT token
require('./utils/auth');

// All routes
routerApi(app);

// Log any error
app.use(logErrors);

// ORM error handlers
app.use(ormErrorHandler);

// Boom error handlers
app.use(boomErrorHandler);

// Non Boom error handlers
app.use(errorHandler);

// Return static content
app.use(`/${config.appRoute}`, express.static(config.publicFolder));

const port = config.port;
server.listen(port, () => {
  logger.info('Mi port ' +  port);
  logger.info('Server running on port ' + port + '...');

  logger.info('Socket running on http://localhost:3000/app/socket.html');

  socket.emitMessage('Server started');
});

let counter = 0;
setInterval(() => {
  socket.emitMessage('Server is alive Nº: ' + counter++);
}, 1000);
