const { Router } = require('express');
const UserController = require('../controllers/UserController');
const UserAvatarController = require('../controllers/UserAvatarController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const usersRoutes = Router();
const multer = require('multer')
const uploadConfig = require('../configs/upload')


const usersController = new UserController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig.MULTER)

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single("avatar"), userAvatarController.update);


module.exports = usersRoutes;