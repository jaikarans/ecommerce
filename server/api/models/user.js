const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: { type: String, required: true },
	email: {
		type: String,
		required: true,
		unique: true,
		match: process.env.EMAIL_VALIDATION_PATTERN,
	},
	password: { type: String, required: true },
	cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
