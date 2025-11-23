import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true } // ADD THIS FIELD
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', ContactSchema);
export default Contact;