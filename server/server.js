const http = require('http');
const dotenv = require('dotenv');
const normalizePort = require('normalize-port');
const app = require('./app');

dotenv.config();

const PORT = normalizePort(process.env.PORT || 5000);

const server = http.createServer(app);

server.listen(PORT);
