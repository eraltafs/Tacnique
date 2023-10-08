const mongoose = require("mongoose");
require("dotenv").config();

// Establish a connection to the MongoDB database
const connection = async () => {
  try {
    await mongoose.connect(process.env.mongo_uri); // Connect to the MongoDB URI from the environment variables
    console.log("Connected to the database");
  } catch (error) {
    console.log("Unable to connect to the database");
  }
};


module.exports = { connection };
