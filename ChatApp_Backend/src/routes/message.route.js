import express from 'express';
import * as messageController from '../controllers/message.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { protect } from '../middlewares/protect.middleware';

const router = express.Router();

//route to send chat
router.post('/', protect, messageController.sendMessage);

// route to fetch chat
router.get('/:chatId', protect, messageController.allMessages);

export default router;