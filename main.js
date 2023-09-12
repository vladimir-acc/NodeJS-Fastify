'use strict';

const fastify = require('fastify');

const cors = require('@fastify/cors');
const cookies = require('@fastify/cookie');
const path = require('node:path');

const { Logger, StreamForLogger } = require('./src/logger.js');
const http = require('./src/http.js');
const ws = require('./src/ws.js');
const { loadApplication } = require('./src/loader.js');
const routes = require('./lib/routes.js');

const APPLICATION_PATH = path.join(process.cwd(), './app');
const LOG_FOLDER_PATH = './log';

(async () => {

  const streamForLogger = new StreamForLogger(LOG_FOLDER_PATH);
  const server = fastify({
    logger: { level: 'info', stream: streamForLogger },
  });

  const logger = new Logger(server.log);
  const app = await loadApplication(APPLICATION_PATH, logger);

  (async () => {
    await server.register(cors, app.config.server.cors);
    await server.register(cookies);
  })();

  http.init(server, routes, app.config.server);

  // http.initStatic(server, APPLICATION_PATH);
  ws.init(server, routes);
  http.start(server, { port: app.config.server.ports });
})();
