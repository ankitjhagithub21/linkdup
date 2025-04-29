const { CreatePost, getAllPost, deletePost } = require("../controllers/postController");
const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/multer");
const postRouter = require("express").Router();

postRouter.post("/create",isAuth,upload.single('image'),CreatePost)
postRouter.get("/",isAuth,getAllPost)
postRouter.delete("/:id",isAuth,deletePost)

module.exports = postRouter;
