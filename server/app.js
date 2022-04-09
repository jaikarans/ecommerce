const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, './uploads/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
	process.env.URI,
	{},
	(err) => {
		if (err) console.log(err);
		else console.log('mongdb is connected');
	},
);

app.use('/', require('./api/routes/index'));
app.use('/product', require('./api/routes/product'));
app.use('/user', require('./api/routes/user'));

module.exports = app;
