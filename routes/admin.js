const router = require('express').Router()
const adminController = require("../controllers/adminController")
const { upload, uploadMultiple } = require("../middlewares/multer")
const auth = require('../middlewares/auth');

router.get('/signin', adminController.viewSignin);
router.post('/signin', adminController.actionSignin);
router.use(auth);
router.get('/logout', adminController.actionLogout);
router.get('/dashboard', adminController.viewDashboard)
// endpoint category
router.get('/category', adminController.viewCategory)
router.post('/category', adminController.addCategory)
router.put('/category', adminController.editCategory)
router.delete('/category/:id', adminController.deleteCategory)

// endpoint bank
router.get('/bank', adminController.viewBank)
router.post('/bank', upload, adminController.addBank)
router.put('/bank', upload, adminController.editBank)
router.delete('/bank/:id', upload, adminController.deleteBank)

// endpoint item
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

// endpoint detail item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
router.post('/item/add/feature', upload, adminController.addFeature);
router.put('/item/update/feature', upload, adminController.editFeature);
router.delete('/item/:itemId/feature/:id', adminController.deleteFeature);

router.get('/booking', adminController.viewBooking);
router.get('/booking/:id', adminController.showDetailBooking);
router.put('/booking/:id/confirmation', adminController.actionConfirmation);
router.put('/booking/:id/reject', adminController.actionReject);

// endpoint user
router.get('/user', adminController.viewUser)
router.post('/user', adminController.addUser)
router.put('/user', adminController.editUser)
router.delete('/user/:id', adminController.deleteUser)

module.exports = router