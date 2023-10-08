const { taskModel } = require("../models/task.model");

// Create a new task
const task_add = async (req, res) => {
  const { user_id } = req.user;
  const { title, description } = req.body;
  const creation_date = new Date();

  // Convert the UTC time to Indian time (+5:30)
  creation_date.setUTCHours(creation_date.getUTCHours() + 5);
  creation_date.setUTCMinutes(creation_date.getUTCMinutes() + 30);

  try {
    // Create a new task with the provided data
    const task = new taskModel({ title, description, creation_date, user_id });
    await task.save();
    res.status(201).send({ msg: "Task added successfully", task });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "internal server error" });
  }
};

// Get all tasks for a user
const get_all_task = async (req, res) => {
  const { user_id } = req.user;
  try {
    // Find all tasks belonging to the user
    const tasks = await taskModel.find({ user_id });
    res.status(200).send(tasks);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "internal server error" });
  }
};

// Get a task by its ID
const get_task = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  try {
    // Find a task by its ID
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
      
      return res.status(404).send({ msg: "Task not found" });
    }
    if (task.user_id == user_id) {
      return res.status(200).send(task);
    }
    return res.status(401).send({ msg: "Unauthorized access" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "internal server error" });
  }
};

// Update a task by its ID
const update_task = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  const payload = req.body;
  try {
    // Find a task by its ID
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
      
      return res.status(404).send({ msg: "Task not found" });
    }
    if (task.user_id == user_id) {
      // Update the task with the provided payload
      await taskModel.findByIdAndUpdate(id, payload);
      return res.status(202).send({ msg: "Task updated successfully" });
    }
    return res.status(401).send({ msg: "Unauthorized access" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "internal server error" });
  }
};

// Delete a task by its ID
const delete_task = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  try {
    // Find a task by its ID
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
      
      return res.status(404).send({ msg: "Task not found" });
    }
    if (task.user_id == user_id) {
      // Delete the task
      await taskModel.findByIdAndDelete(id);
      return res.status(204).send({ msg: "Task deleted successfully" });
    }
    return res.status(401).send({ msg: "Unauthorized access" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "internal server error" });
  }
};

module.exports = {
  task_add,
  get_all_task,
  get_task,
  update_task,
  delete_task,
};
