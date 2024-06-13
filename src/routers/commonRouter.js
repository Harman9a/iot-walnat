const { Router } = require("express");
const verifyToken = require("../middleware/authMidleware");
const { vertifyTokenStatus } = require("../controller/commonController");

const commonRouter = Router();

commonRouter.get("/verifyTokenStatus", verifyToken, vertifyTokenStatus);

module.exports = commonRouter;
