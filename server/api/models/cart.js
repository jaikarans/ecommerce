const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
