/* eslint-disable strict */
({
  host: '0.0.0.0',
  balancer: 8000,
  protocol: 'ws',
  ports: 3003,
  nagle: false,
  timeouts: {
    bind: 2000,
    start: 30000,
    stop: 5000,
    request: 5000,
    watch: 1000,
  },
  queue: {
    concurrency: 1000,
    size: 2000,
    timeout: 3000,
  },
  scheduler: {
    concurrency: 10,
    size: 2000,
    timeout: 3000,
  },
  workers: {
    pool: 2,
    wait: 2000,
    timeout: 5000,
  },
  cors: {
    // origin: ['http://localhost:3006', 'http://localhost:3005', 'http://admin_inosvita.devweb.pp.ua', 'http://inosvita_api.devweb.pp.ua'],
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS', 'INSERT', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
  client: {
    perPage: 6,
  }
});
