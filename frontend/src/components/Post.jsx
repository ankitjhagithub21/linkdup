import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { BsThreeDots } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";


const Post = ({ post, onDelete, onLike, onEdit }) => {
  const { user } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)
  const [isMore, setIsMore] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [description, setDescription] = useState('')
  const [comments, setComments] = useState(post.comments)
  const [isCommentLoading,setIsCommentLoading] = useState(false)

  const handleAddComment = async (description, postId) => {
    if (description.trim().length < 1) {
      toast.error("Can't add empty comment.");
      return
    }
    setIsCommentLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/comments/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({ description, postId })
      })
      const data = await res.json();
      if (data.success) {
        toast.success(data.message)
        setComments([...comments,data.comment])
        setDescription('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }finally{
      setIsCommentLoading(false)
    }
  }

  const handleDeleteComment = async (commentId,postId) => {
   
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({ postId })
      })

      const data = await res.json();
      if (data.success) {
        toast.success(data.message)
        setComments(comments.filter((comment)=>comment._id != commentId))
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <div className="bg-white p-3 rounded-lg flex flex-col border border-gray-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 mb-2">
          <img src={post.user.profilePhoto ? post.user.profilePhoto : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} className="w-12 h-12 object-cover rounded-full" alt="" />
          <div className="flex flex-col gap-0">
            <p className="text-sm font-medium">{post.user.fullName}</p>
            <p className="text-xs ">{post.user.headline}</p>
            <span className="text-xs">{post.createdAt.slice(0, 10)}</span>
          </div>
        </div>
        {

          post.user._id === user._id && <div className="relative">
            <button className="rounded-full cursor-pointer hover:bg-gray-200 p-2" onClick={() => setIsOpen(!isOpen)}>
              <BsThreeDots size={20} />
            </button>
            {
              isOpen && <div className="absolute bg-white shadow-lg rounded-lg overflow-hidden right-0 min-w-fit text-nowrap flex flex-col gap-2">

                <button className="cursor-pointer p-3 flex items-center gap-2 hover:bg-gray-200" onClick={() => {
                  setIsOpen(false)
                  if (confirm("Are you sure, you want to delete this post ?")) {
                    onDelete(post._id)
                  }
                }} ><FaTrash />Delete Post</button>


                <button onClick={() => {
                  setIsOpen(false)
                  onEdit(post)
                }} className="cursor-pointer p-3 gap-2 flex hover:bg-gray-200 items-center"><FaEdit size={20} />Edit Post</button>

              </div>
            }

          </div>
        }


      </div>
      <p className="text-sm text-gray-800">{isMore ? post.description : post.description.slice(0, 200)} {!isMore && post.description.length > 200 && <span className="hover:underline cursor-pointer hover:text-indigo-700" onClick={() => setIsMore(true)}>...more</span>} </p>

      {
        post.image && <img src={post.image} className="my-2" alt="photo" />
      }
      <div className="flex mt-3 text-gray-500 text-sm font-medium border-b border-gray-300 pb-1 items-center justify-between">
        <span>{post.likes.length} Likes</span>

        <span>{comments.length} Comments</span>

      </div>
      <div className="flex items-center justify-between  font-medium text-gray-800 mt-2">
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-200  px-4 py-1 rounded-lg" onClick={() => onLike(post._id)}>
          <AiOutlineLike size={20} />
          <span>Like</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-200  px-4 py-1 rounded-lg" onClick={() => setShowInput(!showInput)}>
          <LiaCommentSolid size={20} />
          <span>Comment</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-200  px-4 py-1 rounded-lg">
          <BiRepost size={20} />
          <span>Repost</span>
        </div>
        <div className="md:flex hidden items-center gap-1 cursor-pointer hover:bg-gray-200  px-4 py-1 rounded-lg">
          <IoIosSend size={20} />
          <span>Send</span>
        </div>
      </div>

      {
        showInput && <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-1">
            <img src={user.profilePhoto} alt="user" className="w-10 h-10 rounded-full object-cover border border-gray-200" />


            <div className="text-sm  rounded-full border flex items-center border-gray-400 outline-none w-full">
              <input type="text" placeholder="Add a comment..." className="w-full p-2 outline-none" value={description} onChange={(e) => setDescription(e.target.value)} />
              <button disabled={isCommentLoading} className="rounded-full disabled:bg-indigo-400 min-w-fit bg-indigo-600 text-white my-1 mr-1 text-sm  cursor-pointer hover:bg-indigo-700 px-2 py-1.5" onClick={() => handleAddComment(description, post._id)}>
                {
                  isCommentLoading ? 'Please Wait...' :'Comment'
                }
              </button>
            </div>


          </div>
         {
          comments.length > 0 &&   <p className="font-medium text-sm text-gray-600">Most relevant</p>
         }
          <div>
            {
              comments.map((comment) => {
                return <div key={comment._id} className="relative">
                 <div className="flex items-start justify-between my-2">
                 <div className="flex items-start gap-2 mb-2">
                    <img src={comment.user.profilePhoto ? comment.user.profilePhoto : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} className="w-10 h-10 object-cover rounded-full" alt="" />
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">{comment.user.fullName}</p>
                      <p className="text-xs -mt-1">{comment.user.headline}</p>
                    
                      <p className="text-sm mt-2 text-gray-600">{comment.description}</p>
                    </div>
                  </div>
                 {
                  comment.user._id === user._id &&  <button className="cursor-pointer " onClick={()=>handleDeleteComment(comment._id,post._id)}>
                  <FaTrash/>
                </button>
                 }
                 </div>
                 
                </div>
              })
            }
          </div>
        </div>
      }


    </div>
  )
}

export default Post