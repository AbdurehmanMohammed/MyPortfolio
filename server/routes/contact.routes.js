import express from 'express';
import * as contactController from '../controllers/contact.controller.js';

const router = express.Router();

// Create a new Contact
router.post('/', contactController.create);

// Retrieve all Contacts
router.get('/', contactController.findAll);

// Retrieve a single Contact with contactId
router.get('/:contactId', contactController.findOne);

// Update a Contact with contactId
router.put('/:contactId', contactController.update);

// Delete a Contact with contactId
router.delete('/:contactId', contactController.deleteOne);

// Delete all Contacts
router.delete('/', contactController.deleteAll);

export default router;