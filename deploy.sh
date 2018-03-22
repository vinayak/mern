#!/bin/bash

echo "Deploying React app to the server....."
npm run build
tar -czf build.tar.gz build/
tar -czf server.tar.gz server/ --exclude node_modules
scp build.tar.gz deploy@35.200.178.54:/home/deploy/.
scp server.tar.gz deploy@35.200.178.54:/home/deploy/.
rm build.tar.gz server.tar.gz

ssh deploy@35.200.178.54 << ENDSSH
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
