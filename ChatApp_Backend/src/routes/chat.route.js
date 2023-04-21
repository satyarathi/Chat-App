import express from 'express';
import * as chatController from '../controllers/chat.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { protect } from '../middlewares/protect.middleware';

const router = express.Router();

//route to access chat
router.post('/', protect, chatController.accessChat);

//route to fetch chat
router.get('/', protect, chatController.fetchChat);

//route to create group chat
router.post('/group', protect, chatController.createGroupChat);

export default router;
