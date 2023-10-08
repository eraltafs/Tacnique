const exoress = require("express");
const cors = require("cors");

port = 8000;

const app = exoress();
app.use(cors());
app.use(exoress.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "base api" });
});

app.listen(port, () => {
  console.log("listening");
});
