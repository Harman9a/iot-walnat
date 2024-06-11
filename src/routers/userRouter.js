const { Router } = require("express");
const {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
  loginUser,
} = require("../controller/usersController");

const userRouter = Router();

userRouter.get("/getUsers", getUsers);
userRouter.post("/addUser", addUsers);
userRouter.post("/updateUser", updateUsers);
userRouter.post("/deleteUser", deleteUsers);
userRouter.post("/loginUser", loginUser);

module.exports = userRouter;
