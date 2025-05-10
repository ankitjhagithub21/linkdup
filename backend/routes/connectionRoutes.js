const { acceptInvite,sendInvite } = require("../controllers/connectionController");
const isAuth = require("../middlewares/isAuth");


const connectionRouter = require("express").Router();


connectionRouter.post("/send",isAuth,sendInvite)
connectionRouter.post("/receive",isAuth,acceptInvite)


module.exports = connectionRouter;
