const router = require('express').Router();

router.get('/', (req, res) => {
	console.log('index');
	return res.status(200).json({
		message: 'this a api',
	});
});

module.exports = router;
