const {Router} = require("express")

const { task_add, get_all_task,get_task,update_task, delete_task } = require("../controller/task.controller")
const taskRouter = Router()


taskRouter.post("/",task_add)
taskRouter.get("/",get_all_task)
taskRouter.get("/:id",get_task)
taskRouter.put("/:id",   update_task)
taskRouter.delete("/:id",delete_task)



module.exports = {taskRouter}