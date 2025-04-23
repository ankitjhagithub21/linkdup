const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const sendRes = (user, res, status, message) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 1 * 24 * 60 * 60 * 1000,
    
  });

  res.status(status).json({ success: true, message, user:{
    _id:user._id,
    fullName:user.fullName,
    email:user.email,
    
  } });
};

const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  if(!fullName || !email || !password){
    return res.status(400).json({success:false,message:"All fields are required."})
  }

  if(fullName.trim().length <3){
    return res.status(400).json({success:false,message:"Full Name too short."})
  }

  //email validation
  if(!validator.isEmail(email)){
    return res.status(400).json({success:false,message:"Please enter valid email address."})
  }

  //password validation
  
  if(!validator.isStrongPassword(password)){
    return res.status(400).json({success:false,message:"Please enter strong password."})
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: "User already exist.", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    sendRes(savedUser, res, 201, "Account created successfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password){
    return res.status(400).json({success:false,message:"All fields are required."})
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found.", success: false });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res
        .status(401)
        .json({ message: "Wrong email or password.", success: false });
    }

    sendRes(user, res, 200, `Login successfull.`);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const logout = (req, res) => {
  res.cookie("token",'',{
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 0,
  })

  res.status(200).json({ success: true, message: "Logout successfull." });
};

module.exports = {
  register,
  login,
  logout,
};
