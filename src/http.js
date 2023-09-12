/* eslint-disable no-loop-func */
/* eslint-disable max-len */
'use strict';

// const path = require('node:path');

// const fastigyStatic = require('@fastify/static');
// const app = require('./loader');
// const { createToken} = require('../../../lib/common.js');

function init(server, routes, config) {
  /* TODO: session support */
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
            return reply.send(result);

          } catch (err) {
            console.error(err);
            if (err === 'Not Found') return reply.status(404).send({ message: err });
            return reply.send({ message: err });
          }
        });

      } else if (method === 'auth') {
        server.post(`/${iface}/${method}/`, async (request, reply) => {

          if (request.method === 'OPTIONS') {
            reply.send('Ok');
          } else {
            try {
              const { login, password } = request.body;
              // console.log({ login, password });

              const result = await route[iface][method](login, password, iface);
              // console.log(result);
              return reply.setCookie('refreshToken', result.refreshToken,
                { expires: new Date(Date.now() + 2592000000), httpOnly: true })
                .send({ accessToken: result.accessToken, user: result.user });
            } catch (err) {
              console.error('ERROR   ', err);
              return reply.status(401).send(err);
            }
          }
        });
      } else if (method === 'logout') {
        server.delete(`/${iface}/${method}/`, async (request, reply) => {
          if (request.method === 'OPTIONS') reply.send('Ok');
          try {
            const { userId } = request.body;
            await route[iface][method](userId, iface);
            return reply.clearCookie('refreshToken')
              .send({ message: `Deleted refreshToken userId=${userId}` });
          } catch (err) {
            console.error(err);
            return reply.send({ message: err });
          }
        });
      } else if (method === 'register') {
        server.post(`/${iface}/${method}/`, async (request, reply) => {
          if (request.method === 'OPTIONS') reply.send('Ok');

          try {
            const { ...data } = request.body;
            if (!data.login || !data.email || !data.password || !data.role) return reply.status(401).send({ err: 'Data not complet' });
            const result = await route[iface][method](data, iface);
            if (result.err) return reply.status(401).send({ err: result.err });
            else return reply.status(201).send({ accessToken: result.tokens.accessToken });

          } catch (err) {
            console.error(err);
            return reply.send({ message: err });
          }

        });

      } else if (method === 'read') {

        server.post(`/${iface}/${method}/:id`, async (request, reply) => {
          try {
            const { id } = request.params;

            const result = await route[iface][method](id, iface);
            return reply.send(result);

          } catch (err) {
            console.error(err);
            return reply.send({ message: err });
          }
        });

      } else if (method === 'create') {
        server.post(`/${iface}/${method}/`, async (request, reply) => {
          if (request.method === 'OPTIONS') {
            reply.send('Ok');
          } else {
            try {
              const { ...data } = request.body;
              await route[iface][method](data, iface);
              return reply.status(201).send({ Created: data });

            } catch (err) {
              console.error(err);
              return reply.send({ message: err });
            }
          }
        });
      } else if (method === 'delete') {
        server.delete(`/${iface}/${method}/:id`, async (request, reply) => {
          try {
            const { id } = request.params;
            const getId = await route[iface].read(id, iface);
            if (id && !getId.message) {
              await route[iface][method](id, iface);
              return reply.send({ message: `Deleted record from ${iface} id = ${id}` });
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
              return reply.status(200).send({ message: `Updated ${iface} id =${id}`, data });
            } else {
              return reply.status(404).send({ message: 'Not Found' });
            }
          } catch (err) {
            console.error('err: ', err);
            return reply.send({ message: err });
          }
        });
      } else if (method === 'findOne') {

        server.post(`/${iface}/${method}/`, async (request, reply) => {
          try {
            const { ...data } = request.body;

            const result = await route[iface][method](data, iface);
            return reply.send(result);

          } catch (err) {
            console.error(err);
            return reply.send({ message: err });
          }
        });

      } else if (method === 'find') {

        server.post(`/${iface}/${method}/`, async (request, reply) => {
          try {
            const { ...data } = request.body;

            const result = await route[iface][method](data, iface);
            return reply.send(result);

          } catch (err) {
            console.error(err);
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
