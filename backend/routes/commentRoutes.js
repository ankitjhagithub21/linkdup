const { addComment, deleteComment } = require("../controllers/commentController");
const isAuth = require("../middlewares/isAuth");


const commentRouter = require("express").Router();


commentRouter.post("/add",isAuth,addComment)
commentRouter.delete("/:id",isAuth,deleteComment)

module.exports = commentRouter;
