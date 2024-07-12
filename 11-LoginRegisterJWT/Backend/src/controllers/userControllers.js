var jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("./../schema/userModel");

console.log(process.env.ACCESS_TOKEN);
const db = [];

const getAllUser = async (req, res) => {
  const data = await User.find();

  res.status(200).send(data);
};

const getUserById = async (req, res) => {
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
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;

  await User.findOneAndDelete({ id: id });

  res.status(200).send("deleted");
};
const postUser = async (req, res) => {
  let obj = req.body;

  obj.id = uuidv4();

  const user = await new User({ ...obj });

  await user.save();
  const data = await User.find();

  res.status(200).send({ message: "succes", data: data });
};
const patchUser = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  let obj = req.body;

  let user = await User.findOneAndUpdate({ id: id }, { ...obj });

  res.status(200).send({ message: "succes", data: user });
};

const loginUser = async (req, res) => {
  const obj = req.body;

  const accessToken = jwt.sign(obj, process.env.ACCESS_TOKEN, {
    expiresIn: "7s",
  });
  const refreshToken = jwt.sign(obj, process.env.REFRESH_TOKEN);

  db.push(refreshToken);

  const name = await User.findOne({ name: obj.name });
  const pass = await User.findOne({ password: obj.password });

  if (name && pass) {
    res.status(200).send({
      message: "login is succuss",
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } else {
    res.status(404).send({
      message: "name ve ya password yalnisdir",
    });
  }
};
const registerUser = async (req, res) => {
  const obj = req.body;

  obj.id = uuidv4();

  const user = await new User({ ...obj });

  await user.save();

  res.status(200).send({ message: "qeydiyyat ugurla bitdi" });
};

module.exports = {
  getAllUser,
  getUserById,
  deleteUserById,
  postUser,
  patchUser,
  loginUser,
  registerUser,
  db,
};
