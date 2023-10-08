const express = require("express");
const cors = require("cors");

const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { taskRouter } = require("./routes/task.routes");
const { authenticate } = require("./middlewares/autheticate");
const { log_data } = require("./middlewares/log_data");
const port = 8000;

const app = express();

// Enable CORS middleware to allow cross-origin requests
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

app.use(log_data);

// Base route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the base API" });
});

// User routes
app.use("/user", userRouter);

// Authentication middleware
app.use(authenticate);

// Task routes
app.use("/task", taskRouter);

app.listen(port, () => {
  // Establish a connection to the database
  connection();
  console.log("Server is listening on port " + port);
});
