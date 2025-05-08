const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    description:{
        type:String,
        trim:true,
        required:true
    },
    
    
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
   
    post: {
        type:Schema.Types.ObjectId,
        ref:"Post",
        required:true
    }
   

  },
  { versionKey: false, timestamps: true }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
