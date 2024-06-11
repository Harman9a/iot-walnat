const { Router } = require("express");
const {
  addAdmin,
  updateUsers,
  deleteUsers,
  loginUser,
  getAdmins,
} = require("../controller/usersController");
const verifyToken = require("../middleware/authMidleware");

const userRouter = Router();

userRouter.post("/loginUser", loginUser);

userRouter.get("/getAdmins", verifyToken, getAdmins);
userRouter.post("/addAdmin", addAdmin);
userRouter.post("/updateUser", updateUsers);
userRouter.post("/deleteUser", deleteUsers);

module.exports = userRouter;
