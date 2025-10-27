import Qualification from '../models/qualification.model.js';

// Create and Save a new Qualification
export const create = async (req, res) => {
  try {
    if (!req.body.title || !req.body.firstname || !req.body.lastname || !req.body.email || !req.body.completion || !req.body.description) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const qualification = new Qualification({
      title: req.body.title,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      completion: req.body.completion,
      description: req.body.description
    });

    const savedQualification = await qualification.save();
    res.status(201).json(savedQualification);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while creating the Qualification."
    });
  }
};

// Retrieve all Qualifications
export const findAll = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving qualifications."
    });
  }
};

// Find a single Qualification by id
export const findOne = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.qualificationId);
    if (!qualification) {
      return res.status(404).json({
        message: "Qualification not found with id " + req.params.qualificationId
      });
    }
    res.json(qualification);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        message: "Qualification not found with id " + req.params.qualificationId
      });
    }
    res.status(500).json({
      message: "Error retrieving qualification with id " + req.params.qualificationId
    });
  }
};

// Update a Qualification by id
export const update = async (req, res) => {
  try {
    if (!req.body.title || !req.body.firstname || !req.body.lastname || !req.body.email || !req.body.completion || !req.body.description) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const qualification = await Qualification.findByIdAndUpdate(
      req.params.qualificationId,
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

    if (!qualification) {
      return res.status(404).json({
        message: "Qualification not found with id " + req.params.qualificationId
      });
    }
    res.json(qualification);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        message: "Qualification not found with id " + req.params.qualificationId
      });
    }
    res.status(500).json({
      message: "Error updating qualification with id " + req.params.qualificationId
    });
  }
};

// Delete a Qualification by id
export const deleteOne = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndDelete(req.params.qualificationId);
    if (!qualification) {
      return res.status(404).json({
        message: "Qualification not found with id " + req.params.qualificationId
      });
    }
    res.json({ message: "Qualification deleted successfully!" });
  } catch (error) {
    if (error.kind === 'ObjectId' || error.name === 'NotFound') {
      return res.status(404).json({
        message: "Qualification not found with id " + req.params.qualificationId
      });
    }
    res.status(500).json({
      message: "Could not delete qualification with id " + req.params.qualificationId
    });
  }
};

// Delete all Qualifications
export const deleteAll = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});
    res.json({
      message: `${result.deletedCount} Qualifications were deleted successfully!`
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while removing all qualifications."
    });
  }
};