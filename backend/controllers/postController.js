const Post = require("../models/postModel");
const { io } = require("../server");
const deleteImage = require("../utils/deleteImage");
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

    let post;

    if (imageUrl) {
      post = new Post({
        description: description?.trim() || '',
        image: imageUrl,
        user: req.userId,
      });
    } else {
      post = new Post({
        description: description?.trim() || '',
        user: req.userId,
      });
    }

    await post.save();

    const savedPost = await post.populate({
      path: "user",
      select: "fullName profilePhoto headline"
    })

    io.emit('newPost',{post:savedPost})

    return res.status(201).json({
      success: true,
      message: "Post created successfully.",
      post:savedPost
    });

  } catch (error) {
    console.error("CreatePost Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
const editPost = async (req, res) => {

  try {
    const { description } = req.body;
    const postId = req.params.id;

    let post = await Post.findById(postId);

    if(!post){
      return res.status(404).json({success:false,message:"Post not found."})
    }

  
    if (post.user.toString() !== req.userId.toString()) {
      return res.status(400).json({ message: "You can't edit others post.", success: false });
    }

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

  
    if(imageUrl) post.image = imageUrl;
    if(description) post.description = description;

    await post.save();

    const savedPost = await post.populate({
      path: "user",
      select: "fullName profilePhoto headline"
    })

    return res.status(200).json({
      success: true,
      post: savedPost,
      message: "Post updated successfully.",
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
      }).populate({
         path:"comments",
         populate:{
           path:'user',
           select:"profilePhoto fullName headline"
         }
         
      })

    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const getUserPost = async (req, res) => {
  try {
    const posts = await Post.find({user:req.userId})
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "profilePhoto fullName headline",
      }).populate({
         path:"comments",
         populate:{
           path:'user',
           select:"profilePhoto fullName headline"
         }
         
      })

    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return res.status(404).json({ message: "Post not found.", success: false });
    }

    if (post.user.toString() !== req.userId.toString()) {
      return res.status(400).json({ message: "You can't delete others post.", success: false });
    }

    if (post.image) {
      await deleteImage(post.image);
    }
    await post.deleteOne();

   const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "profilePhoto fullName headline",
      }).populate({
         path:"comments",
         populate:{
           path:'user',
           select:"profilePhoto fullName headline"
         }
         
      })
      
      io.emit('removePost',{posts})

    res.status(200).json({ message: "Post deleted.", success: true });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};


const likeUnlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found.", success: false });
    }

    const userId = req.userId; 

    const index = post.likes.findIndex((id) => id.toString() === userId.toString());

    if (index < 0) {
      post.likes.push(userId); // user is liking the post
    } else {
      post.likes.splice(index, 1); // user is unliking the post
    }

    await post.save();

    // Emit socket event to notify all clients
    io.emit('likeUpdated', { likes: post.likes,postId:post._id });

    res.status(200).json({
      message: "Post like count updated successfully.",
      success: true,
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};



module.exports = {
  CreatePost,
  getAllPost,
  deletePost,
  likeUnlikePost,
  editPost,
  getUserPost
};
