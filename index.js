const express = require('express');
const routerApi = require('./routes');

const { config } = require('./config/config');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const corsHandler = require('./middlewares/cors.handler');

const app = express();
const port = config.port;

app.use(express.json());
app.use(corsHandler());

require('./utils/auth');

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Return static content
app.use(`/${config.appRoute}`, express.static(config.publicFolder));

app.listen(port, () => console.log('Mi port' +  port));
