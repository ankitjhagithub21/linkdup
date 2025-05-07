const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    description:{
        type:String,
        trim:true
    },
    image:{
        type:String,
        
    },
    
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    likes:[
        {
            type:Schema.Types.ObjectId,
            ref:"User",
            default:[]
        }
    ],
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:"Comment",
            default:[]
        }
    ],
   

  },
  { versionKey: false, timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;
