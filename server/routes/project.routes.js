import express from 'express';
import * as projectController from '../controllers/project.controller.js';

const router = express.Router();

// Create a new Project
router.post('/', projectController.create);

// Retrieve all Projects
router.get('/', projectController.findAll);

// Retrieve a single Project with projectId
router.get('/:projectId', projectController.findOne);

// Update a Project with projectId
router.put('/:projectId', projectController.update);

// Delete a Project with projectId
router.delete('/:projectId', projectController.deleteOne);

// Delete all Projects
router.delete('/', projectController.deleteAll);

export default router;