const mongoose = require("mongoose");

// Define the schema 
const userSchema = mongoose.Schema({
  email: { type: String, required: true }, 
  password: { type: String, required: true }, 
  name: String,
});

// Create a Mongoose model
const UserModel = mongoose.model("user", userSchema);

// Export the UserModel
module.exports = { UserModel };
