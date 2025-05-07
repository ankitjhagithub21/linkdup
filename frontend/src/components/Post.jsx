import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Post = ({post,onDelete,onLike}) => {
  const {user} = useContext(AuthContext)
  return (
    <div className="bg-white p-3 rounded-lg flex flex-col border border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb-2">
          <img src={post.user.profilePhoto ? post.user.profilePhoto : 'https://cdn-icons-png.flaticon.com/512/149/149071.png' } className="w-12 h-12 object-cover rounded-full" alt="" />
          <div className="flex flex-col gap-0">
            <p className="text-sm font-medium">{post.user.fullName}</p>
            <p className="text-xs ">{post.user.headline}</p>
            <span className="text-xs">{post.createdAt.slice(0,10)}</span>
          </div>
        </div>
        {
          post.user._id === user._id &&  <button className="cursor-pointer" onClick={()=>onDelete(post._id)} ><FaTrash color="red"/></button>
        }
        
      </div>
      <p className="text-sm text-gray-800 my-2">{post.description}</p>
      {
        post.image && <img src={post.image} alt="photo" />
      }
      <div className="flex mt-3 text-gray-500 text-sm font-medium border-b border-gray-300 pb-1 items-center justify-between">
        <span>{post.likes.length} Likes</span>

        <span>{post.comments.length} Comments</span>

      </div>
      <div className="flex items-center justify-between  font-medium text-gray-800 mt-2">
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-200  px-4 py-1 rounded-lg" onClick={()=>onLike(post._id)}>
            <AiOutlineLike size={20}/>
            <span>Like</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-200  px-4 py-1 rounded-lg">
            <LiaCommentSolid size={20}/>
            <span>Comment</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-200  px-4 py-1 rounded-lg">
            <BiRepost size={20}/>
            <span>Repost</span>
        </div>
        <div className="md:flex hidden items-center gap-1 cursor-pointer hover:bg-gray-200  px-4 py-1 rounded-lg">
            <IoIosSend size={20}/>
            <span>Send</span>
        </div>
      </div>

    </div>
  )
}

export default Post