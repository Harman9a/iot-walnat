const { Router } = require("express");
const {
  getAdmins,
  addAdmin,
  deleteAdmin,
  updateUsers,
  loginUser,
} = require("../controller/usersController");
const verifyToken = require("../middleware/authMidleware");

const userRouter = Router();

userRouter.post("/loginUser", loginUser);

userRouter.get("/getAdmins", verifyToken, getAdmins);
userRouter.post("/addAdmin", verifyToken, addAdmin);
userRouter.post("/deleteAdmin", verifyToken, deleteAdmin);
userRouter.post("/updateUser", updateUsers);

module.exports = userRouter;
