# Fastify + NodeJS application server

1. git clone -b sqlite <url>
# branche sqlite
2. npm install
3. cp env_example.txt .env

# Config .env & save
# Config app/config/server.js

4. npx prisma migrate dev
# Beefor first run app, need to npx prisma reset. (Run seede data)  
5. node main.js

# Create file sudo vim /lib/systemd/system/api-inosvita.service:
[Unit]
Description=Api-server

[Service]
ExecStart=/usr/bin/node /var/www/inshaosvita/api-server/main.js
WorkingDirectory=/var/www/inshaosvita/api-server/
Restart=always

[Install]
WantedBy=multi-user.target
6. Run: 
sudo systemctl daemon-reload
sudo systemctl start api-inosvita.service
sudo systemctl enable api-inosvita.service
