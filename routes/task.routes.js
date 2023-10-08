const {Router} = require("express")

const { task_add, get_task } = require("../controller/task.controller")
const taskRouter = Router()


taskRouter.post("/",task_add)
taskRouter.get("/",get_task)


module.exports = {taskRouter}