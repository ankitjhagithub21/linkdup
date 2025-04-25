const User = require("../models/userModel");

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found.", success: false });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const updateProfile = async (req, res) => {
  const {fullName,headline,location,position,about,website} = req.body;

  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found.", success: false });
    }

    if(fullName) user.fullName = fullName;
    if(about) user.about = about;
    if(headline) user.headline = headline;
    if(position) user.position = position;
    if(location) user.location = location;
    if(website) user.website = website;
   
    await user.save()


    res.status(200).json({ success: true, user, message:"Profile updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

module.exports = {
  getCurrentUser,
  updateProfile
};
