const router = require('express').Router();
const ProductController = require('../controllers/product');
const upload = require('../middleware/imageUpload');

router.get('/', ProductController.getAllProducts);
router.post('/', upload.single('productImage'), ProductController.addProduct);
router.get('/:productId', ProductController.getProductDetails);

module.exports = router;
