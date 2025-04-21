const { register, login, logout } = require("../controllers/authController");

const authRouter = require("express").Router();


authRouter.post("/register",register)
authRouter.post("/login",login)
authRouter.post("/logout",logout)


module.exports = authRouter;
