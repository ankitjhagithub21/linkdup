import { useState } from "react";
import { MdClose } from "react-icons/md";
import toast from "react-hot-toast";
const UpdateCoverImage = ({ onClose, image,setUser }) => {
    const [previewImage, setPreviewImage] = useState(image || null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file)
            setPreviewImage(URL.createObjectURL(file));
           
        }
    };

    const handleUpload = async() => {

        if (!selectedFile) {
            toast.error("Please select an image first.");
            return;
        }
        const formData = new FormData();
        formData.append('coverImage',selectedFile)
        setLoading(true)
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/update/cover-image`,{
                method:"PUT",
                credentials:'include',
                body:formData
            })
            const data = await res.json();
            if(data.success){
                setUser(data.user)
                toast.success(data.message)
                onClose(false)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error("Upload Failed.")
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="w-full h-screen z-50 flex items-center justify-center p-5 bg-black/50 fixed top-0 left-0">
            <div className="max-w-3xl w-full bg-white rounded-lg px-4 relative">
                <div className="flex items-center justify-between py-2 sticky top-0 bg-white z-10">
                    <h1 className="text-2xl font-medium">Cover Image</h1>
                    <MdClose size={25} onClick={() => onClose(false)} className="cursor-pointer" />
                </div>

                <div className="mb-3 flex flex-col gap-1">
                    <label htmlFor="coverImage" className="cursor-pointer">
                        <div className="bg-gray-300 h-44 w-full rounded-lg overflow-hidden">
                            {previewImage ? (
                                <img src={previewImage} alt="cover" className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">No Image</div>
                            )}
                        </div>
                    </label>
                    <input
                       disabled={loading}
                        type="file"
                        id="coverImage"
                        name="coverImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>

                <div className="flex items-center justify-end gap-3 mb-3">
                   {
                    !loading &&  <label htmlFor="coverImage" className="px-4 py-2 cursor-pointer border border-blue-600 text-gray-800 hover:bg-gray-200 rounded-full">

                    Choose File

                </label>
                   }

                    <button
                        type="button"
                        disabled={loading}
                        onClick={handleUpload}
                        className="px-4 py-2 bg-blue-600 cursor-pointer text-white hover:bg-blue-700 rounded-full"
                    >
                        {
                            loading ? 'Uploading...' : 'Upload'
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoverImage;
