import express from 'express';
import * as qualificationController from '../controllers/qualification.controller.js';

const router = express.Router();

// Create a new Qualification
router.post('/', qualificationController.create);

// Retrieve all Qualifications
router.get('/', qualificationController.findAll);

// Retrieve a single Qualification with qualificationId
router.get('/:qualificationId', qualificationController.findOne);

// Update a Qualification with qualificationId
router.put('/:qualificationId', qualificationController.update);

// Delete a Qualification with qualificationId
router.delete('/:qualificationId', qualificationController.deleteOne);

// Delete all Qualifications
router.delete('/', qualificationController.deleteAll);

export default router;