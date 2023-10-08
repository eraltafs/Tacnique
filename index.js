const exoress = require("express");
const cors = require("cors");

const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
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

app.listen(port, () => {
  connection();
  console.log("listening");
});
