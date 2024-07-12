const express = require("express");
const userController = require("./../controllers/userControllers");
const userAuth = require("./../middleware/userAuth");

const userRouter = express.Router();

userRouter.get("/", userAuth, userController.getAllUser);
userRouter.get("/:id", userController.getUserById);
userRouter.delete("/:id", userController.deleteUserById);
userRouter.post("/", userController.deleteUserById);
userRouter.patch("/:id", userController.patchUser);
userRouter.post("/login", userController.loginUser);
userRouter.post("/register", userController.registerUser);

module.exports = userRouter;
