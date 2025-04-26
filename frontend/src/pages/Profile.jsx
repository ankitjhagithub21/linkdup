import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import UpdateProfile from "../components/UpdateProfile"
import { FaPencilAlt } from "react-icons/fa"
import UpdateCoverImage from "../components/UpdateCoverImage"
import UpdateProfilePhoto from "../components/UpdateProfilePhoto"

const Profile = () => {
  const { user, setUser } = useContext(AuthContext)
  const [showUpdateProfile, setShowUpdateProfile] = useState(false)
  const [showUpdateProfilePhoto, setShowUpdateProfilePhoto] = useState(false)
  const [showUpdateCoverImage, setShowUpdateCoverImage] = useState(false)

  useEffect(() => {
    document.title = `${user.fullName} | Linkedln`
  }, [])



  return (
    <>
      {
        showUpdateProfile && <UpdateProfile user={user} onClose={setShowUpdateProfile} setUser={setUser} />
      }
      {
        showUpdateProfilePhoto && <UpdateProfilePhoto user={user} image={user.profilePhoto} onClose={setShowUpdateProfilePhoto} setUser={setUser} />
      }

      {
        showUpdateCoverImage && <UpdateCoverImage onClose={setShowUpdateCoverImage} image={user.coverImage} setUser={setUser}/>
      }
      <div className="lg:w-[76%] w-full relative z-0">

        <div className="bg-white rounded-lg overflow-hidden z-10 pb-5 ">
          <button className="rounded-full py-3  absolute top-2 right-2  px-3 bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800" onClick={()=>setShowUpdateCoverImage(true)}>
            <FaPencilAlt />
          </button>
          <div className="h-44 w-full bg-gray-200 ">

            {
              user.coverImage && <img src={user.coverImage} alt="cover" className="w-full h-full object-cover" />
            }
          </div>
          <div className="flex   justify-between">
            <div className="w-32 h-32 rounded-full bg-white -mt-20 lg:ml-10 ml-5 overflow-hidden cursor-pointer " onClick={()=>setShowUpdateProfilePhoto(true)}>
              <img src={user.profilePhoto ? user.profilePhoto : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} loading="lazy" alt="profile" className="w-full h-full object-cover" />
            
            </div>
            <button className="rounded-full mr-5 py-3 mt-5 px-3 bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800" onClick={() => setShowUpdateProfile(true)}>
              <FaPencilAlt />
            </button>
          </div>
          <div className="lg:ml-10 ml-5">
            <h1 className="text-3xl font-medium mt-4">{user.fullName}</h1>
            <p className="text-xl mb-2">{user.headline}</p>
            {
              user.website && <a href={user.website} target="_blank" className="text-blue-700 underline">Website</a>
            }
            {
              user.location && <p className="text-gray-600 my-2">{user.location}</p>
            }
            <p className="text-blue-600 font-medium">{user?.followers?.length} followers {user?.connections?.length} connections</p>
          </div>
        </div>

        <div className="bg-white border mt-5 border-gray-200 rounded-lg p-4">
          <h2 className="text-3xl mb-2 font-medium">About</h2>
          <p>{user.about}</p>
        </div>
      </div>
    </>
  )
}

export default Profile