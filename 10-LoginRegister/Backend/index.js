const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3000;
var cors = require("cors");
const User = require("./src/schema/userModel");
require("./src/config/db");
const userRouter = require("./src/routes/userRoutes");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1>users: /users </h1>");
  //   res.redirect("/users");
});
// get all
app.use("/users", userRouter);

app.post("/login", async (req, res) => {
  // const data = await User.find();
  // console.log(req.body);
  const obj = req.body;

  const name = await User.findOne({ name: obj.name });
  const pass = await User.findOne({ password: obj.password });

  if (name && pass) {
    res.status(200).send({
      message: "login is succuss",
    });
  } else {
    res.status(404).send({
      message: "name ve ya password yalnisdir",
    });
  }
});
app.post("/register", async (req, res) => {
  const obj = req.body;

  obj.id = uuidv4();

  const user = await new User({ ...obj });

  await user.save();
  // const data = await User.find();

  res.status(200).send({ message: "qeydiyyat ugurla bitdi" });
});

// post
app.post("/users/", async (req, res) => {
  let obj = req.body;

  obj.id = uuidv4();

  const user = await new User({ ...obj });

  await user.save();
  const data = await User.find();

  res.status(200).send({ message: "succes", data: data });
});

//patch
app.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  let obj = req.body;

  let user = await User.findOneAndUpdate({ id: id }, { ...obj });

  res.status(200).send({ message: "succes", data: user });
});

//put
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  let obj = req.body;

  let user = await User.findOneAndReplace({ id: id }, { ...obj });
  res.status(200).send({ message: "succes", data: user });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
