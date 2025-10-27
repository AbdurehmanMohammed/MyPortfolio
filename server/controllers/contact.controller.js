import Contact from '../models/contact.model.js';

// Create and Save a new Contact
export const create = async (req, res) => {
  try {
    if (!req.body.firstname || !req.body.lastname || !req.body.email) {
      return res.status(400).json({
        message: "All fields (firstname, lastname, email) are required"
      });
    }

    const contact = new Contact({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    });

    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while creating the Contact."
    });
  }
};

// Retrieve all Contacts
export const findAll = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving contacts."
    });
  }
};

// Find a single Contact by id
export const findOne = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    if (!contact) {
      return res.status(404).json({
        message: "Contact not found with id " + req.params.contactId
      });
    }
    res.json(contact);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        message: "Contact not found with id " + req.params.contactId
      });
    }
    res.status(500).json({
      message: "Error retrieving contact with id " + req.params.contactId
    });
  }
};

// Update a Contact by id
export const update = async (req, res) => {
  try {
    if (!req.body.firstname || !req.body.lastname || !req.body.email) {
      return res.status(400).json({
        message: "All fields (firstname, lastname, email) are required"
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.contactId,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
      },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found with id " + req.params.contactId
      });
    }
    res.json(contact);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        message: "Contact not found with id " + req.params.contactId
      });
    }
    res.status(500).json({
      message: "Error updating contact with id " + req.params.contactId
    });
  }
};

// Delete a Contact by id
export const deleteOne = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.contactId);
    if (!contact) {
      return res.status(404).json({
        message: "Contact not found with id " + req.params.contactId
      });
    }
    res.json({ message: "Contact deleted successfully!" });
  } catch (error) {
    if (error.kind === 'ObjectId' || error.name === 'NotFound') {
      return res.status(404).json({
        message: "Contact not found with id " + req.params.contactId
      });
    }
    res.status(500).json({
      message: "Could not delete contact with id " + req.params.contactId
    });
  }
};

// Delete all Contacts
export const deleteAll = async (req, res) => {
  try {
    const result = await Contact.deleteMany({});
    res.json({
      message: `${result.deletedCount} Contacts were deleted successfully!`
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while removing all contacts."
    });
  }
};