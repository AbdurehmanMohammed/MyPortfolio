import Project from '../models/project.model.js';

// Create and Save a new Project
export const create = async (req, res) => {
  try {
    if (!req.body.title || !req.body.firstname || !req.body.lastname || !req.body.email || !req.body.completion || !req.body.description) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const project = new Project({
      title: req.body.title,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      completion: req.body.completion,
      description: req.body.description
    });

    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while creating the Project."
    });
  }
};

// Retrieve all Projects
export const findAll = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving projects."
    });
  }
};

// Find a single Project by id
export const findOne = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({
        message: "Project not found with id " + req.params.projectId
      });
    }
    res.json(project);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        message: "Project not found with id " + req.params.projectId
      });
    }
    res.status(500).json({
      message: "Error retrieving project with id " + req.params.projectId
    });
  }
};

// Update a Project by id
export const update = async (req, res) => {
  try {
    if (!req.body.title || !req.body.firstname || !req.body.lastname || !req.body.email || !req.body.completion || !req.body.description) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const project = await Project.findByIdAndUpdate(
      req.params.projectId,
      {
        title: req.body.title,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        completion: req.body.completion,
        description: req.body.description
      },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({
        message: "Project not found with id " + req.params.projectId
      });
    }
    res.json(project);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        message: "Project not found with id " + req.params.projectId
      });
    }
    res.status(500).json({
      message: "Error updating project with id " + req.params.projectId
    });
  }
};

// Delete a Project by id
export const deleteOne = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.projectId);
    if (!project) {
      return res.status(404).json({
        message: "Project not found with id " + req.params.projectId
      });
    }
    res.json({ message: "Project deleted successfully!" });
  } catch (error) {
    if (error.kind === 'ObjectId' || error.name === 'NotFound') {
      return res.status(404).json({
        message: "Project not found with id " + req.params.projectId
      });
    }
    res.status(500).json({
      message: "Could not delete project with id " + req.params.projectId
    });
  }
};

// Delete all Projects
export const deleteAll = async (req, res) => {
  try {
    const result = await Project.deleteMany({});
    res.json({
      message: `${result.deletedCount} Projects were deleted successfully!`
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while removing all projects."
    });
  }
};