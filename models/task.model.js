const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String },
  creation_date: { type: Date },
  status: {
    type: String,
    enum: ["pending", "progress", "completed"],
    default: "pending",
  },
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = { taskModel };
