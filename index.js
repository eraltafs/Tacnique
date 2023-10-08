const exoress = require("express");
const cors = require("cors");

const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { taskRouter } = require("./routes/task.routes");
const { authenticate } = require("./middlewares/autheticate");

port = 8000;

const app = exoress();
app.use(cors());
app.use(exoress.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "base api" });
});
app.use("/user", userRouter)
app.use(authenticate)
app.use("/task",taskRouter)


app.listen(port, () => {
  connection();
  console.log("listening");
});
