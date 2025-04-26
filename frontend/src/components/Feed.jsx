import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { useSelector } from "react-redux"


const Feed = () => {
    const { user } = useContext(AuthContext)
    const { posts, isLoading } = useSelector(state => state.post)


    return (


        <div className=" lg:w-[50%] w-full overflow-hidden rounded-lg flex flex-col gap-3">

            <CreatePost user={user} />
            <hr className="text-gray-400" />
            <div className="flex flex-col gap-3">
                {
                   isLoading ? <p>Loading...</p> :  posts.map((post) => {
                        return <Post key={post._id} post={post} />
                    })
                }
            </div>
        </div>

    )
}

export default Feed