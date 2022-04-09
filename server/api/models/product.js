const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: { type: String, required: true },
	quantity: { type: Number, default: 1 },
	productImage: String,
	price: Number,
	discription: String,
	seller: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
