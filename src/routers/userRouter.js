const { Router } = require("express");
const {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
  loginUser,
} = require("../controller/usersController");
const verifyToken = require("../middleware/authMidleware");

const userRouter = Router();

userRouter.post("/loginUser", loginUser);

userRouter.get("/getUsers", verifyToken, getUsers);
userRouter.post("/addUser", addUsers);
userRouter.post("/updateUser", updateUsers);
userRouter.post("/deleteUser", deleteUsers);

module.exports = userRouter;
