// const mongoose = require('mongoose');
const { default: mongoose } = require('mongoose');
const Cart = require('../models/cart');
const User = require('../models/user');

/**
 *
 * @param req
 * @param res
 * get all the user in the database
 */
exports.getAllUser = (req, res) => {
	User.find()
		.exec()
		.then((docs) => {
			res.status(200).json({
				no_of_users: docs.length,
				users: docs,
			});
		});
};

/**
 *
 * @param req
 * @param res
 * create an new user and add it database.
 */
exports.addUser = (req, res) => {
	const cartForUser = new Cart({
		_id: new mongoose.Types.ObjectId(),
	});

	cartForUser.save()
		.then((docs) => {
			const user = new User({
				_id: new mongoose.Types.ObjectId(),
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				cart: docs._id,
			});
			user.save()
				.then((result) => {
					res.status(200).json({
						message: 'new user added',
						user: result,
					});
				});
		});
};
