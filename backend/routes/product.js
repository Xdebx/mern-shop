//** code ni sir */
// const express = require('express');
// const router = express.Router();
// const {getProducts,newProduct, getSingleProduct, updateProduct, deleteProduct} = require('../controllers/productController');
// // router.route('/products').get(getProducts);
// router.get('/products',getProducts);
// router.post('/product/new',newProduct);
// router.get('/product/:id',getSingleProduct);
// router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);
// module.exports = router;

//** code ni sir with auth*/
const express = require('express');
const router = express.Router();
const {getProducts,newProduct, getSingleProduct, updateProduct, deleteProduct} = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');

router.get('/products',getProducts);
router.post('/product/new',newProduct);
router.get('/product/:id',getSingleProduct);
// router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);

///WITH AUTH---------------------------------------------

// router.get('/products', isAuthenticatedUser,  getProducts);

// router.get('/products',  isAuthenticatedUser,  authorizeRoles('admin'), getProducts)

// router.post('/admin/product/new', isAuthenticatedUser, authorizeRoles('admin'), newProduct);

// router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct).delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

module.exports = router;