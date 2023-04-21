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

//route to rename group chat
router.put('/rename', protect, chatController.renameGroupChat);

//route to add user to group chat
router.put('/addToGroup', protect, chatController.addToGroup);

//route to remove user to group chat
router.put('/removeFromGroup', protect, chatController.removeFromGroup);

export default router;
