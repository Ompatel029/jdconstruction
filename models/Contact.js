const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  message: String,
});

module.exports = mongoose.model("Contact", contactSchema);
