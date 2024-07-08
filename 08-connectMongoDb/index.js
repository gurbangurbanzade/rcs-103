const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3000;
const User = require("./schema/userModel");
require("./config/db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>users: /users </h1>");
  //   res.redirect("/users");
});
// get all
app.get("/users", async (req, res) => {
  const data = await User.find();

  res.status(200).send(data);
});
// get by id
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ id: id });

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({
      status: 404,
      message: " bele bir user yoxdur",
    });
  }
});

// delete by id
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  await User.findOneAndDelete({ id: id });

  res.status(200).send("deleted");
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
