import { lazy, useEffect, useState } from "react"
import { FaPencilAlt } from "react-icons/fa"
import { useParams } from "react-router-dom"
const Navbar = lazy(() => import("../components/Navbar"));
const OtherUsers = lazy(() => import("../components/OtherUsers"))


const OtherUserProfile = () => {
    const [user, setUser] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        document.title = `${user?.fullName} | Linkedln`
    }, [id])


    useEffect(() => {
        const fetchUserData = async () => {
          
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/profile/${id}`, {
                    credentials: 'include'
                })

                const data = await res.json()
                if (data.success) {
                    setUser(data.user)
                } else {
                    setUser(null)
                }
            } catch (error) {
                console.log(error)
                setUser(null)
            }
        }
        fetchUserData()
    }, [id])


    


    return (
        <>
            <Navbar />


            {
                user ?
                <main className="max-w-6xl mx-auto w-full gap-4 lg:gap-0 px-3 md:px-0 pb-10 flex justify-between items-start
        flex-wrap mt-5">
                    <div className="lg:w-[72%] w-full relative z-0">

                        <div className="bg-white rounded-lg overflow-hidden z-10 pb-5 ">

                            <div className="h-44 w-full bg-gray-200 ">

                                {
                                    user.coverImage && <img src={user.coverImage} alt="cover" className="w-full h-full object-cover" />
                                }
                            </div>
                            <div className="flex   justify-between">
                                <div className="w-32 h-32 rounded-full bg-white -mt-20 lg:ml-10 ml-5 overflow-hidden cursor-pointer " onClick={() => setShowUpdateProfilePhoto(true)}>
                                    <img src={user.profilePhoto ? user.profilePhoto : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} loading="lazy" alt="profile" className="w-full h-full object-cover" />

                                </div>

                            </div>
                            <div className="lg:ml-10 ml-5">
                                <h1 className="text-3xl font-medium my-2">{user.fullName}</h1>
                                <p className="text-gray-800 mb-2">{user.headline}</p>
                                {
                                    user.website && <a href={user.website} target="_blank" className="text-blue-700 underline">Website</a>
                                }
                                {
                                    user.location && <p className="text-gray-600 my-2">{user.location}</p>
                                }
                                <p className="text-blue-600 font-medium">{user?.followers?.length} followers {user?.connections?.length}+ connections</p>
                                <div className="flex gap-3 flex-wrap items-center mt-3">
                                    <button className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium cursor-pointer">Message</button>
                                    <button className="px-4 py-1 text-blue-600 border-blue-600 border rounded-full font-medium cursor-pointer">+ Follow</button>
                                    
                                    <button className="px-4 py-1 text-gray-600 border-gray-600 border rounded-full font-medium cursor-pointer">More</button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border mt-5 border-gray-200 rounded-lg p-4">
                            <h2 className="text-3xl mb-2 font-medium">About</h2>
                            <p>{user.about}</p>
                        </div>

                    </div>
                    <div className="lg:w-[26%] w-full ">
                        <div className=" bg-white rounded-lg p-3 border border-gray-300 mb-4">
                            <div>
                                <div className="flex items-center  justify-between">
                                    <h2 className="text-lg font-medium">Profile language</h2>
                                    <FaPencilAlt />
                                </div>
                                <span className="text-sm text-gray-600">English</span>
                            </div>
                            <hr className="text-gray-200 my-4" />
                            <div>
                                <div className="flex items-center  justify-between">
                                    <h2 className="text-lg font-medium">Public profile & URL</h2>
                                    <FaPencilAlt />
                                </div>
                                <span className="text-sm text-gray-600">www.linkedin.com</span>
                            </div>


                        </div>
                        <OtherUsers />
                    </div>

                </main> : <p>User not found.</p>
            }

        </>
    )
}

export default OtherUserProfile