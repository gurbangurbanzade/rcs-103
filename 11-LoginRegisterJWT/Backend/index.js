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

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
