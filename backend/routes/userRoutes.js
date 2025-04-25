const { getCurrentUser, updateProfile } = require("../controllers/userController");
const isAuth = require("../middlewares/isAuth");

const userRouter = require("express").Router();

userRouter.get("/current",isAuth,getCurrentUser)
userRouter.put("/update/profile",isAuth,updateProfile)

module.exports = userRouter;
