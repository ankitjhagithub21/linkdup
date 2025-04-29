const cloudinary = require("../config/cloudinary");

function extractPublicId(url) {
    const urlWithoutParams = url.split('?')[0];
    const parts = urlWithoutParams.split('/');
    const uploadIndex = parts.indexOf('upload');
    const publicIdWithExtension = parts.slice(uploadIndex + 1).join('/');
    const versionRegex = /^v\d+\//;
    const publicId = publicIdWithExtension.replace(versionRegex, '').replace(/\.[^/.]+$/, '');
    return publicId;
}


const deleteImage = async (url) => {
    try {
        const publicId = extractPublicId(url);
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.error("Error deleting image:", error);
    }
};

module.exports = deleteImage;
