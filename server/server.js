const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const { PORT } = process.env;

const server = http.createServer(app);

server.listen(PORT);
