import express from 'express';
import * as contactController from '../controllers/contact.controller.js';
import authCtrl from '../controllers/auth.controller.js'; // ADD THIS

const router = express.Router();

// Create a new Contact (public route - anyone can contact)
router.post('/', contactController.create);

// PROTECTED ROUTES - Require authentication
router.get('/', authCtrl.requireSignin, contactController.findAll);
router.get('/:contactId', authCtrl.requireSignin, contactController.findOne);
router.put('/:contactId', authCtrl.requireSignin, contactController.update);
router.delete('/:contactId', authCtrl.requireSignin, contactController.deleteOne);
router.delete('/', authCtrl.requireSignin, contactController.deleteAll);

export default router;