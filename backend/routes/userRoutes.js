const { getCurrentUser, updateProfile, updateProfilePhoto, updateCoverImage } = require("../controllers/userController");
const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/multer");

const userRouter = require("express").Router();

userRouter.get("/current",isAuth,getCurrentUser)
userRouter.put("/update/profile",isAuth,updateProfile)
userRouter.put("/update/profile-photo",isAuth,upload.single('profilePhoto'),updateProfilePhoto)
userRouter.put("/update/cover-image",isAuth,upload.single('coverImage'),updateCoverImage)

module.exports = userRouter;
