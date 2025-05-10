const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      maxlength: 50,
      trim:true
    },

    profilePhoto:{
      type:String,
      default:"",
    },
    coverImage:{
      type:String,
      default:"",
    },

    headline:{
      type:String,
      default:"",
    },

    location:{
      type:String,
      default:""
    },

    position:{
      type:String,
      default:''
    },
    about:{
      type:String,
      default:""
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true
    },
    
    website: {
      type: String,
      default: '',
    },

    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],

    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    connections: [
      {
        type: Schema.Types.ObjectId,
        ref: "Connection",
        default: [],
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
