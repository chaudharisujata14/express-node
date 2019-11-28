#!/bin/bash

clear
pm2 describe server.js > /dev/null

if [ $? -ne '0' ]; then
pm2 start server.js
else
pm2 restart server.js
fi

exit
