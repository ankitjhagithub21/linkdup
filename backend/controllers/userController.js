const User = require("../models/userModel")

const getCurrentUser = async (req, res) => {
     
    try {
      const user = await User.findById(req.userId).select("-password");
  
      if (!user) {
        return res
          .status(400)
          .json({ message: "User not found.", success: false });
      }
  
      res
      .status(200)
      .json({ success:true, user });
      
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Server error", success: false });
    }
  };

  module.exports = {
    getCurrentUser
  }