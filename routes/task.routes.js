const { Router } = require("express");

// Import the controller functions
const { task_add, get_all_task,get_task,update_task, delete_task } = require("../controller/task.controller")

const taskRouter = Router(); // Express router for tasks

// Define routes
taskRouter.post("/", task_add); // Route to create a new task
taskRouter.get("/", get_all_task); // Route to get all tasks for a user
taskRouter.get("/:id", get_task); // Route to get a task by its ID
taskRouter.put("/:id", update_task); // Route to update a task by its ID
taskRouter.delete("/:id", delete_task); // Route to delete a task by its ID

module.exports = { taskRouter }; // Export
