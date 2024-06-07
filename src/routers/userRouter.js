const { Router } = require("express");
const {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
  loginUser,
} = require("../controller/usersController");

const userRouter = Router();

userRouter.get("/get", getUsers);
userRouter.post("/add", addUsers);
userRouter.post("/update", updateUsers);
userRouter.post("/delete", deleteUsers);
userRouter.post("/login", loginUser);

module.exports = userRouter;
