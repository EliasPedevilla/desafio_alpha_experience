const express = require('express');
const { isAdmin, isAuth } = require('../middlewares');
const { createSingleProduct, getSingleProduct, getAllProducts, updateSingleProduct, deleteSingleProduct } = require('../controllers/product');

const router = express.Router();

router.post('/', isAuth, isAdmin, createSingleProduct);
router.get('/', getAllProducts);
router.get('/:productId', getSingleProduct);
router.put('/:productId', isAuth, isAdmin, updateSingleProduct);
router.delete('/:productId', isAuth, isAdmin, deleteSingleProduct);


module.exports = router;
