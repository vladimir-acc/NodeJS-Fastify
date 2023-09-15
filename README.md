# Fastify + NodeJS application server

1. git pull sqlite
# branche sqlite
2. npm install
3. cp env_example.txt .env
# Config .env & save
4. npx prisma migrate dev
# Beefor first run app, need to npx prisma reset. (Run seede data)  
5. node main.js