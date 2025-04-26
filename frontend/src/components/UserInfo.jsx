import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


const UserInfo = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=" rounded-lg lg:w-[22%] w-full overflow-hidden border border-gray-300 bg-white">
            <div className="h-20 bg-gray-500 w-full overflow-hidden">
                {
                    user.coverImage && <img src={user.coverImage} alt="cover" className="w-full h-full object-cover" />
                }
            </div>
            <img src={user.profilePhoto ? user.profilePhoto : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" className="w-16 h-16 object-cover rounded-full -mt-8 ml-5" />
            <h1 className="mt-3 font-medium text-xl ml-5">{user.fullName}</h1>
            <div className="ml-5 mb-5 text-gray-700 text-sm">
                <p>{user.headline}</p>
                <p>{user.location}</p>
                <p>{user.position}</p>
            </div>

        </div>
    )
}

export default UserInfo