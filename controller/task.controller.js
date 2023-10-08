const { taskModel } = require("../models/task.model");

const task_add = async (req, res) => {
  const { title, author } = req.body;
  try {
    const task = new taskModel({ title, author });
    await task.save();
    res.send({ msg: "task added", task });
  } catch (error) {
    res.send({ msg: "task not added" });
  }
};
const get_task = async (req, res) => {
  const task = await taskModel.find();
  res.send(task);
};

module.exports = {
  task_add,
  get_task,
};
