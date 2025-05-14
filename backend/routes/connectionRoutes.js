const { sendInvite, getInvitation, changeStatus } = require("../controllers/connectionController");
const isAuth = require("../middlewares/isAuth");


const connectionRouter = require("express").Router();


connectionRouter.post("/send",isAuth,sendInvite)
connectionRouter.post("/change/status",isAuth,changeStatus)
connectionRouter.get("/",isAuth,getInvitation)


module.exports = connectionRouter;
