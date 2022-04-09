const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/', userController.getAllUser);
router.post('/', userController.addUser);

module.exports = router;
