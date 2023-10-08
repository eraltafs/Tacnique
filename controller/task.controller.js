const { taskModel } = require("../models/task.model");

// Create a new task
const task_add = async (req, res) => {
  const { user_id } = req.user;
  const { title, description } = req.body;
  const creation_date = new Date();

  creation_date.setUTCHours(creation_date.getUTCHours() + 5);
  creation_date.setUTCMinutes(creation_date.getUTCMinutes() + 30);

  try {
    const task = new taskModel({ title, description, creation_date, user_id });
    await task.save();
    res.status(201).send({ msg: "Task added successfully", task });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "Server error" });
  }
};

// Get all tasks for a user
const get_all_task = async (req, res) => {
  const { user_id } = req.user;
  try {
    const tasks = await taskModel.find({ user_id });
    res.status(200).send(tasks);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "Server error" });
  }
};

// Get a task by its ID
const get_task = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  try {
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
      return res.status(404).send({ msg: "Task not found" });
    }
    if (task.user_id == user_id) {
      return res.status(200).send(task);
    }
    return res
      .status(403)
      .send({ msg: "You are not allowed to get another person's task" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "Server error" });
  }
};

// Update a task by its ID
const update_task = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  const payload = req.body;
  try {
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
      return res.status(404).send({ msg: "Task not found" });
    }
    if (task.user_id == user_id) {
      await taskModel.findByIdAndUpdate(id, payload);
      return res.status(200).send({ msg: "Task updated successfully" });
    }
    return res
      .status(403)
      .send({ msg: "You are not allowed to update another person's task" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "Server error" });
  }
};

// Delete a task by its ID
const delete_task = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  try {
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
      return res.status(404).send({ msg: "Task not found" });
    }
    if (task.user_id == user_id) {
      await taskModel.findByIdAndDelete(id);
      return res.status(200).send({ msg: "Task deleted successfully" });
    }
    return res
      .status(403)
      .send({ msg: "You are not allowed to delete another person's task" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: "Server error" });
  }
};

module.exports = {
  task_add,
  get_all_task,
  get_task,
  update_task,
  delete_task,
};
