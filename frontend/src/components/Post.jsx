import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

const Post = ({post}) => {
  return (
    <div className="bg-white p-3 rounded-lg flex flex-col border border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb-2">
          <img src="https://res.cloudinary.com/dkpc8lg9p/image/upload/v1745663841/linkedln-clone/testuser_wubwnu.jpg" className="w-14 h-14 object-cover rounded-full" alt="" />
          <div className="flex flex-col gap-0">
            <p className="text-sm font-medium">{post.user.fullName}</p>
            <p className="text-xs ">{post.user.headline}</p>
            <span className="text-xs">{post.createdAt.slice(0,10)}</span>
          </div>
        </div>
        
      </div>
      <p className="text-sm text-gray-800 mb-3">{post.description}</p>
      <img src={post.image} alt="photo" />
      <div className="flex mt-3 text-gray-500 text-sm font-medium border-b border-gray-300 pb-1 items-center justify-between">
        <span>{post.likes.length} Likes</span>

        <span>{post.comments.length} Comments</span>

      </div>
      <div className="flex items-center justify-between  font-medium text-gray-800 mt-2">
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-200  px-4 py-1 rounded-lg">
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