const cloudinary = require("../config/cloudinary");
const fs = require("fs");
const uploadImage = async (imagePath) => {
  if (!imagePath) {
    return null;
  }

  const options = {
    use_filename: true,
    unique_filename: true,
    overwrite: false,
    folder: "linkedln-clone",
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    fs.unlinkSync(imagePath);
    return result.secure_url;
  } catch (error) {
    fs.unlinkSync(imagePath);
    console.error(error);
    return null;
  }
};

module.exports = uploadImage;
