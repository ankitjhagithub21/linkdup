import { useState } from "react"
import { MdClose } from "react-icons/md"
import { useDispatch } from "react-redux"
import { MdInsertPhoto } from "react-icons/md"
import toast from "react-hot-toast"
import { editPost } from "../app/slices/postSlice"

const EditPostModal = ({ post,user, onClose }) => {
  const [previewImage, setPreviewImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState(post.description || '')
  const dispatch = useDispatch()
  const handleSubmit = async () => {
    if(loading) return;
    setLoading(true)
    const formData = new FormData();
    if (description) formData.append('description', description)
    if (previewImage) formData.append('image', previewImage)

    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/posts/${post._id}/edit`, {
        method: "PUT",
        credentials:'include',
        body: formData
      })
      const data = await res.json()
      if(data.success){
        onClose(false)
        dispatch(editPost(data.post)) 
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-full h-screen z-50   flex items-center justify-center   p-5 bg-black/50 fixed top-0 left-0'>
      <div className="bg-white max-w-3xl relative h-[90vh] flex flex-col overflow-y-scroll no-scrollbar w-full p-5 rounded-lg ">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2">
            <img src={user.profilePhoto ? user.profilePhoto : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="user" className="w-16 h-16 border border-gray-300 object-cover rounded-full" />
            <div>
              <h2 className="font-medium text-xl">{user.fullName}</h2>
              <p className="text-sm">Post to Anyone</p>
            </div>
          </div>
          <MdClose size={25} onClick={() => onClose(false)} cursor={"pointer"} />
        </div>
        <textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)} id="description" placeholder="What do you want to talk about?" className="lg:text-2xl md:text-xl text-lg w-full p-2 outline-none resize-none flex-1 min-h-20"></textarea>
       <div className="w-full">
       {
          previewImage ? <MdClose size={25} className="float-right cursor-pointer" onClick={() => setPreviewImage(null)} /> : <label htmlFor="image">
            <MdInsertPhoto size={30} className="text-gray-700  hover:text-gray-900 cursor-pointer" />
          </label>
        }
        {
          previewImage && <img src={URL.createObjectURL(previewImage)} alt="" className="w-full" />
        }
        <input type="file" accept="image/*" id="image" name="image" onChange={(e) => setPreviewImage(e.target.files[0])} className="hidden" />
        <hr className="text-gray-300 my-2" />
        
        <button disabled={!description && !previewImage} className="px-6 disabled:cursor-default disabled:bg-blue-400 py-2 rounded-full bg-blue-600 text-white float-right cursor-pointer hover:bg-blue-800" onClick={handleSubmit}>
            {
              loading ? 'Saving...' : 'Save'
            }
          </button>
       
       </div>
      </div>
    </div>
  )
}

export default EditPostModal