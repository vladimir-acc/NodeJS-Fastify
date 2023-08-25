/* eslint-disable no-loop-func */
/* eslint-disable max-len */
'use strict';

// const path = require('node:path');

// const fastigyStatic = require('@fastify/static');
// const app = require('./loader');


function init(server, routes, config) {
  /* TODO: session support */
  const origin = config.cors.origin;
  const perPage = config.client.perPage;

  for (const [iface, methods] of Object.entries(routes)) {
    for (const [method, handler] of Object.entries(methods)) {

      if (typeof handler !== 'function') {
        continue;
      }
      const route = require('../lib/routes');

      if (method === 'show') {

        server.get(`/${iface}/${method}/`, async (request, reply) => {
          try {
            const { page, tagsId, id } = request.query;
            let condition;
            if (tagsId) {
              condition = 'tagsId=' + Object.values(tagsId);
            } else if (id) {
              condition = 'id=' + Object.values(id);
            }
            // const tag = 'tagsId=' + Object.values(tagsId);
            // console.log(Object.keys(tagsId) + '=' + Object.values(tagsId));

            const offset = page === '1' ? '0' : perPage * page - perPage;

            const result = await route[iface][method](condition, perPage, offset, iface);
            return reply.header('Access-Control-Allow-Origin', origin).send(result);

          } catch (err) {
            console.error(err);
            if (err === 'Not Found') return reply.header('Access-Control-Allow-Origin', origin).status(404).send({ message: err });
            return reply.send({ message: err });
          }
        });

      } else if (method === 'read') {

        server.post(`/${iface}/${method}/:id`, async (request, reply) => {
          try {
            const { id } = request.params;

            const result = await route[iface][method](id, iface);
            return reply.header('Access-Control-Allow-Origin', origin).send(result);

          } catch (err) {
            console.error(err);
            return reply.header('Access-Control-Allow-Origin', origin).send({ message: err });
          }
        });

      } else if (method === 'create') {
        server.post(`/${iface}/${method}/`, async (request, reply) => {
          try {
            const { ...data } = request.body;
            await route[iface][method](data, iface);
            return reply.header('Access-Control-Allow-Origin', origin).status(201).send({ Created: data });

          } catch (err) {
            console.error(err);
            return reply.send({ message: err });
          }
        });
      } else if (method === 'delete') {
        server.delete(`/${iface}/${method}/:id`, async (request, reply) => {
          try {
            const { id } = request.params;
            const getId = await route[iface].read(id, iface);
            if (id && !getId.message) {
              await route[iface][method](id, iface);
              return reply.header('Access-Control-Allow-Origin', origin).send({ message: `Deleted record from ${iface} id = ${id}` });
            } else {
              return reply.status(404).send({ message: 'Not Found' });
            }
          } catch (err) {
            console.error(err);
            return reply.send({ message: err });
          }
        });
      } else if (method === 'update') {
        server.put(`/${iface}/${method}/:id`, async (request, reply) => {
          try {
            const { id } = request.params;
            const getId = await route[iface].read(id, iface);

            if (id && !getId.message) {
              const { ...data } = request.body;
              await route[iface][method](id, data, iface);
              // eslint-disable-next-line max-len
              return reply.header('Access-Control-Allow-Origin', origin).status(200).send({ message: `Updated ${iface} id =${id}`, data });
            } else {
              return reply.status(404).send({ message: 'Not Found' });
            }
          } catch (err) {
            console.error('err: ', err);
            return reply.send({ message: err });
          }
        });
      }
    }
  }
}

// function initStatic(server, appPath) {
//   const staticPath = path.join(appPath, 'static');

//   server.register(fastigyStatic, {
//     root: staticPath,
//     wildcard: true,
//   });
// }

const start = async (server, config) => {
  await server.listen(config);
  server.log.info(`API Server running on port ${config.port}`);
};

module.exports = {
  init,
  // initStatic,
  start,
};
