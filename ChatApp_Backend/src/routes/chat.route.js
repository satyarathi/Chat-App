import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.post('/', userAuth, chatController.accessChat);

// //route to create a new user
// router.post('/', newUserValidator, userController.userRegister);

// //route to Login user
// router.post('/login', userController.userLogin);

export default router;
