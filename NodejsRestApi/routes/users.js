import express from 'express';
import utils from '../utilities/utils.js';
import userController from '../controllers/user.controller.js';

const router = express.Router();
router.post('/',userController.user_create);
router.get('/:id', userController.user_details);
router.get('/', userController.user_list);
router.put('/:id', userController.user_update);
export default router;

