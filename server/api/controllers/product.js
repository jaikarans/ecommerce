const mongoose = require('mongoose');
const Product = require('../models/product');

exports.getAllProducts = (req, res) => {
	Product.find()
		.select('name productImage price discription')
		.exec()
		.then((docs) => {
			res.status(200).json({
				no_of_products: docs.length,
				products: docs,
				done: 'yes',
			});
		});
};

exports.addProduct = (req, res) => {
	console.log(req.file);
	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price,
		discription: req.body.discription,
		productImage: req.file.filename,
	});
	product.save()
		.then((result) => {
			console.log(result);
			res.status(200).json({
				objectCreate: 'yes',
			});
		});
};

exports.getProductDetails = (req, res) => {
	const { productId } = req.params;
	Product.findById(productId)
		.select('_id name price discription productImage')
		.exec()
		.then((product) => {
			console.log(product);
			if (product) {
				res.status(200).json({
					product,
				});
			} else {
				res.status(404).json({
					message: 'product not found',
				});
			}
		});
};
