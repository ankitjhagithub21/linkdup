const { CreatePost, getAllPost, deletePost, likeUnlikePost, editPost } = require("../controllers/postController");
const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/multer");
const postRouter = require("express").Router();

postRouter.post("/create",isAuth,upload.single('image'),CreatePost)
postRouter.get("/",isAuth,getAllPost)
postRouter.delete("/:id",isAuth,deletePost)
postRouter.post("/:id/like",isAuth,likeUnlikePost)
postRouter.put("/:id/edit",isAuth,upload.single('image'),editPost)


module.exports = postRouter;
