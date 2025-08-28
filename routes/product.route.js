const express = require('express');
const { createProduct, AllProduct, DeleteProduct, singleProduct } = require('../controllers/product.controller');
const { auth } = require('../middleware/auth.middleware');
const router = express.Router()

router.post('/create', auth(['seller']), createProduct)
router.get('/all', auth(['seller', 'buyer']), AllProduct)
router.get('/:id', auth(['seller', 'buyer']), singleProduct)
router.delete('/delete/:id', auth(['seller']), DeleteProduct)

module.exports = router