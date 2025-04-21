const { getCurrentUser } = require("../controllers/userController");
const isAuth = require("../middlewares/isAuth");

const userRouter = require("express").Router();

userRouter.get("/current",isAuth,getCurrentUser)

module.exports = userRouter;
