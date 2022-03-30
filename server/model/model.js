const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phonenumber: { type: String, required: true, unique: true },
  image: String,
});

const Contact = mongoose.model("contact", contactSchema);
module.exports = Contact;
