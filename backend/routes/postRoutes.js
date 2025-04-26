const { CreatePost, getAllPost } = require("../controllers/postController");
const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/multer");
const postRouter = require("express").Router();

postRouter.post("/create",isAuth,upload.single('image'),CreatePost)
postRouter.get("/",getAllPost)

module.exports = postRouter;
