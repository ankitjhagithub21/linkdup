import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"


const Profile = () => {
  const { user } = useContext(AuthContext)
  useEffect(() => {
    document.title = `${user.fullName} | Linkedln`
  }, [])

  return (
    <div className="lg:w-[76%] w-full">
     <div className="bg-white rounded-lg overflow-hidden pb-5 ">
     <div className="h-44 w-full bg-gray-200"></div>
      <div className="w-32 h-32 rounded-full bg-white -mt-20 lg:ml-10 ml-5 overflow-hidden">
        <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png"loading="lazy" alt="profile" className="w-full h-full " />

      </div>
      <div className="lg:ml-10 ml-5">
        <h1 className="text-3xl font-medium mt-4">{user.fullName}</h1>
        <p className="text-xl mb-2">{user.headline} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aut.</p>
        <p className="text-gray-600 mb-2">{user.location} Lorem ipsum dolor sit.</p>
      <p className="text-blue-600 font-medium">{user.followers.length} followers {user.connections.length} connections</p>
      </div>
     </div>

      <div className="bg-white border mt-5 border-gray-200 rounded-lg p-3">
        <h2 className="text-2xl font-medium">About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minima saepe necessitatibus? Libero doloribus reprehenderit placeat! Suscipit libero ipsam ullam debitis tempora adipisci, nobis dolorum eum et voluptas explicabo facere!</p>
      </div>
    </div>
  )
}

export default Profile