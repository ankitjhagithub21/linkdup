const Post = require("../models/postModel");
const uploadImage = require("../utils/uploadImage");
const CreatePost = async (req, res) => {
  try {
    const { description } = req.body;

    // Check if both description and image are missing
    if (!description?.trim() && !req.file) {
      return res.status(400).json({
        success: false,
        message: "At least a description or an image is required.",
      });
    }

    let imageUrl = null;

    if (req.file && req.file.path) {
      imageUrl = await uploadImage(req.file.path);
      if (!imageUrl) {
        return res.status(400).json({
          success: false,
          message: "Image upload failed.",
        });
      }
    }

    const post = new Post({
      description: description?.trim() || null,
      image: imageUrl,
      user: req.userId,
    });

    await post.save();

    const savedPost = await post.populate({
      path:"user",
      select:"fullName profilePhoto headline"
    })
    
    return res.status(201).json({
      success: true,
      post: savedPost,
      message: "Post created successfully.",
    });

  } catch (error) {
    console.error("CreatePost Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find({})
    .sort({ createdAt: -1 })
    .populate({
      path: "user",
      select: "profilePhoto fullName headline",
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
