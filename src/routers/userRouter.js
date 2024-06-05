const { Router } = require("express");
const {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
} = require("../controller/usersController");

const userRouter = Router();

userRouter.get("/get", getUsers);
userRouter.post("/add", addUsers);
userRouter.post("/update", updateUsers);
userRouter.post("/delete", deleteUsers);

module.exports = userRouter;
