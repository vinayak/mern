#!/bin/bash

echo "Deploying React app to the server....."
npm run build
tar -czf build.tar.gz build/
tar -czf server.tar.gz server/ --exclude node_modules
scp build.tar.gz user@35.229.40.87:/usr/share/nginx/.
scp server.tar.gz user@35.229.40.87:/usr/share/nginx/.
rm build.tar.gz server.tar.gz

ssh user@35.229.40.87 << ENDSSH
cd /usr/share/nginx
rm -rf build
tar -xzf build.tar.gz
rm build.tar.gz
pm2 stop swara
rm -rf server
tar -xzf server.tar.gz
rm server.tar.gz
cd server
npm install
pm2 start swara
ENDSSH
