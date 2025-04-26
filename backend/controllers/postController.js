const Post = require("../models/postModel");
const uploadImage = require("../utils/uploadImage");
const CreatePost = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "Please upload an image." });
  }

  try {
    const imageUrl = await uploadImage(req.file.path);
    if (imageUrl) {
      const post = new Post({
        description: req.body.description,
        image: imageUrl,
        user: req.userId,
      });
      const savedPost = await post.save();
      res
        .status(201)
        .json({
          success: true,
          post: savedPost,
          message: "Post created successfully.",
        });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Image upload failed." });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find({}).populate({
      path:"user",
      select:"profilePhoto fullName headline "
    });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

module.exports = {
  CreatePost,
  getAllPost,
};
