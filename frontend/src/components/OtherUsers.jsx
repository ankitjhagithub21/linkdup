
import { useState, useEffect,useContext } from "react"
import { FaUserPlus } from "react-icons/fa"
import { AuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"


const OtherUsers = () => {
    const [users, setUsers] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/other`, {
                    credentials: 'include'
                })

                if (res.ok) {
                    const data = await res.json();
                    setUsers(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchOtherUsers()
    }, [])

    const sendInvite = async (senderId, receiverId) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/connections/send`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials: 'include',
                body:JSON.stringify({senderId,receiverId})
            })


            const data = await res.json()
            if(data.success){
                toast.success(data.message)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className=" bg-white rounded-lg p-3 border border-gray-300">
            <h2 className="font-medium mb-3">People you may know</h2>
            <div className="flex flex-col gap-5">

                {
                    users.map((u) => {
                        return <div className="flex gap-2 items-start" key={u._id}>
                            <img src={u.profilePhoto ? u.profilePhoto : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt={u.fullName} className="w-14 h-14 object-cover border border-gray-200 rounded-full" />
                            <div>
                                <h4 className="font-medium">{u.fullName}</h4>
                                <p className="text-xs">{u.headline}</p>
                                <button onClick={()=>sendInvite(user._id,u._id)} className="border flex items-center gap-2 border-gray-600 font-medium text-gray-600 rounded-full px-4 py-1 mt-2 text-sm cursor-pointer hover:bg-indigo-100">
                                    <FaUserPlus />
                                    Connect</button>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default OtherUsers