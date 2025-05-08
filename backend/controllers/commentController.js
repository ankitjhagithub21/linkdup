const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

const addComment = async (req, res) => {
  try {
    const { description, postId } = req.body;

    // Basic validation
    if (!description?.trim() || !postId) {
      return res.status(400).json({
        success: false,
        message: "Description and postId are required.",
      });
    }

    // Check if post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }

    // Create and save comment
    const newComment = new Comment({
      description: description.trim(),
      post: post._id,
      user: req.userId,
    });

    const savedComment = await newComment.save();

    // Push comment ID to post's comments array
    post.comments.push(savedComment._id);
    await post.save();

    // Populate user field in the saved comment
    const populatedComment = await savedComment.populate({
      path: 'user',
      select: 'fullName profilePhoto headline',
    });

    // Send response
    return res.status(201).json({
      success: true,
      message: "Comment added successfully.",
      comment: populatedComment,
    });

  } catch (error) {
    console.error("Error adding comment:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};


const deleteComment = async (req, res) => {
  try {
    const { postId } = req.body;
    const commentId = req.params.id;

    // Validate input
    if (!postId) {
      return res.status(400).json({
        success: false,
        message: "postId is required.",
      });
    }

    // Check if post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }

    // Check if comment exists
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found.",
      });
    }

    // Optional: Ensure the comment is actually on the post
    if (!post.comments.includes(comment._id)) {
      return res.status(400).json({
        success: false,
        message: "Comment does not belong to the specified post.",
      });
    }

    // Only the author of the comment can delete it
    if (comment.user.toString() !== req.userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this comment.",
      });
    }

    // Remove comment from post.comments
    post.comments = post.comments.filter(
      (id) => id.toString() !== comment._id.toString()
    );
    await post.save();

    // Delete comment document
    await comment.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully.",
    });

  } catch (error) {
    console.error("Error deleting comment:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};


module.exports = {
  addComment,
  deleteComment
}