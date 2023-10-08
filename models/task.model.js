const mongoose = require("mongoose");
// Create a Mongoose schema
const taskSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: { type: String, require: true },
  description: { type: String },
  creation_date: { type: Date },
  status: {
    type: String,
    enum: ["pending", "progress", "completed"],
    default: "pending",
  },
});
// Create a Mongoose model
const taskModel = mongoose.model("task", taskSchema);
// exports
module.exports = { taskModel };
