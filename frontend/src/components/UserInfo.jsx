import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


const UserInfo = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=" rounded-lg lg:w-[22%] w-full overflow-hidden border border-gray-300 bg-white">
            <div className="h-20 bg-gray-500 w-full">
            </div>
            <img src={user.profilePhoto ? user.profilePhoto : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" className="w-16 h-16 object-cover rounded-full -mt-8 ml-5" />
            <h1 className="mt-3 font-medium text-xl ml-5">{user.fullName}</h1>
            <div className="p-3 text-sm">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ex.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor.</p>
            </div>

        </div>
    )
}

export default UserInfo