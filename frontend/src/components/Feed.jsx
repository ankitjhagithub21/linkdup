import { useContext,lazy,useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
const CreatePost = lazy(()=>import("./CreatePost"))
const Post = lazy(()=>import("./Post"))
const CreatePostModal = lazy(()=>import("./CreatePostModal"))
const EditPostModal = lazy(()=>import("./EditPostModal"))


const Feed = () => {
    const { user } = useContext(AuthContext);
    const { posts, isLoading } = useSelector((state) => state.post);
    const [showModal, setShowModal] = useState(false)
    const [showEditModal,setShowEditModal] = useState(false)
    const [currentPost,setCurrentPost] = useState(null)

    const handleDeletePost = async (postId) => {
        const toastId = toast.loading("Post is deleting...");
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/posts/${postId}`, {
                method: "DELETE",
                credentials: "include"
            });

            const data = await res.json();
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Error deleting post.");
        } finally {
            toast.dismiss(toastId);
        }
    };
    const handleLikeUnlike = async (postId) => {
      
        try {
            await fetch(`${import.meta.env.VITE_SERVER_URL}/api/posts/${postId}/like`, {
                method: "POST",
                credentials: "include"
            });

           
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Error deleting post.");
        } 
    };
    const handleEditButtonClick = (post) => {
        
        setCurrentPost(post)
        setShowEditModal(true)
       
    }
   
    

    return (
        <div className="lg:w-[50%] w-full overflow-hidden rounded-lg flex flex-col gap-3">
            <CreatePost user={user} setShowModal={setShowModal}/>
            {
                showModal && <CreatePostModal user={user} onClose={setShowModal} />
            }
            {
                showEditModal && currentPost && user && <EditPostModal post={currentPost} user={user}  onClose={setShowEditModal}/> 
            }
            <hr className="text-gray-400" />
            <div className="flex flex-col gap-3">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    posts.map((post) => (
                        <Post key={post._id} post={post} onDelete={handleDeletePost} onLike={handleLikeUnlike} onEdit={handleEditButtonClick}/>
                    ))
                )}
            </div>
        </div>
    );
};

export default Feed;
