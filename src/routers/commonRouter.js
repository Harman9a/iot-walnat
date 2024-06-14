const { Router } = require("express");
const verifyToken = require("../middleware/authMidleware");
const {
  vertifyTokenStatus,
  updateProfile,
} = require("../controller/commonController");

const commonRouter = Router();

commonRouter.get("/verifyTokenStatus", verifyToken, vertifyTokenStatus);
commonRouter.post("/updateProfile", verifyToken, updateProfile);

module.exports = commonRouter;
