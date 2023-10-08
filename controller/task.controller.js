const { taskModel } = require("../models/task.model");
const { userModel } = require("../models/user.model");

const task_add = async (req, res) => {
  const { user_id } = req.user;
  const { title, description } = req.body;
  const creation_date = new Date();

  creation_date.setUTCHours(creation_date.getUTCHours() + 5);
  creation_date.setUTCMinutes(creation_date.getUTCMinutes() + 30);

  try {
    const task = new taskModel({ title, description, creation_date, user_id });
    await task.save();
    res.send({ msg: "task added", task });
  } catch (error) {
    console.log(error);
    return res.send({ msg: "server error" });
  }
};
const get_all_task = async (req, res) => {
  const { user_id } = req.user;
  try {
    const task = await taskModel.find({ user_id });
    res.send(task);
  } catch (error) {
    console.log(error);
    return res.send({ msg: "server error" });
  }
};
const get_task = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  try {
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
      return res.send({ msg: "task not found" });
    }
    if (task.user_id == user_id) {
      return res.send(task);
    }
    return res.send({ msg: "you are not allowed to get another person task" });
  } catch (error) {
    console.log(error);
    return res.send({ msg: "server error" });
  }
};
const update_task = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  const payload = req.body
  try {
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
      return res.send({ msg: "task not found" });
    }
    if (task.user_id == user_id) {
      await taskModel.findByIdAndUpdate(id,payload)
      return res.send({msg:"task updated"});
    }
    return res.send({ msg: "you are not allowed to update another person task" });
  } catch (error) {
    console.log(error);
    return res.send({ msg: "server error" });
  }
};
const delete_task = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.user;
  try {
    const task = await taskModel.findOne({ _id: id });
    if (!task) {
      return res.send({ msg: "task not found" });
    }
    if (task.user_id == user_id) {
      await taskModel.findByIdAndDelete(id)
      return res.send({msg:"task deleted"});
    }
    return res.send({ msg: "you are not allowed to delete another person task" });
  } catch (error) {
    console.log(error);
    return res.send({ msg: "server error" });
  }
};
module.exports = {
  task_add,
  get_all_task,
  get_task,
  update_task,
  delete_task,
};
