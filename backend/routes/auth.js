// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser, logout } = require('../controllers/authController');

// router.route('/register').post(registerUser);

// router.route('/login').post(loginUser);

// router.route('/logout').get(logout);

// // router.get('/products', isAuthenticatedUser,  getProducts);

// // router.route('/password/forgot').post(forgotPassword);

// // router.route('/password/reset/:token').put(resetPassword);

// // router.route('/logout').get(logout);


// module.exports = router;

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserProfile, updatePassword, updateProfile, allUsers, getUserDetails, updateUser, deleteUser } = require('../controllers/authcontroller');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.get('/me', isAuthenticatedUser, getUserProfile)

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/logout').get(logout);
router.get('/me', isAuthenticatedUser, getUserProfile);
router.put('/password/update', isAuthenticatedUser, updatePassword);
router.put('/me/update', isAuthenticatedUser, updateProfile);
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);
// router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails)
// router.route('/admin/user/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
// router.route('/admin/user/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)
router.route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)

module.exports = router;

