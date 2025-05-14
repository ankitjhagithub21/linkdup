const User = require("../models/userModel");
const uploadImage = require("../utils/uploadImage");


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
  const { fullName, headline, location, position, about, website } = req.body;

  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found.", success: false });
    }

    if (fullName) user.fullName = fullName;
    if (about) user.about = about;
    if (headline) user.headline = headline;
    if (position) user.position = position;
    if (location) user.location = location;
    if (website) user.website = website;

    await user.save();

    res
      .status(200)
      .json({ success: true, user, message: "Profile updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const updateProfilePhoto = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "Please upload profile photo." });
  }
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found.", success: false });
    }

    const imageUrl = await uploadImage(req.file.path);

    if (imageUrl) {
      user.profilePhoto = imageUrl;
      await user.save();
      return res
        .status(200)
        .json({
          success: true,
          user,
          message: "Profile photo updated successfully",
        });
    }
    return res.status(400).json({ message: "Unable to upload profile photo.", success: false });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const updateCoverImage = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "Please upload cover image." });
  }
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found.", success: false });
    }

    const imageUrl = await uploadImage(req.file.path);

    if (imageUrl) {
      user.coverImage = imageUrl;
      await user.save();
      return res
        .status(200)
        .json({
          success: true,
          user,
          message: "Cover Image updated successfully",
        });
    }
    return res.status(400).json({ message: "Unable to upload cover image.", success: false });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const getOtherUsers = async (req, res) => {
  try {
   const users = await User.find({ _id: { $ne: req.userId } })
                            .select('profilePhoto fullName headline');



    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

module.exports = {
  getCurrentUser,
  updateProfile,
  updateProfilePhoto,
  updateCoverImage,
  getOtherUsers
};
