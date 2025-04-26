import { FaHome, FaSearch } from 'react-icons/fa'
import { BsFillPeopleFill } from "react-icons/bs";
import { IoBag, IoNotifications } from "react-icons/io5";
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { Link} from 'react-router-dom';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/logout`, {
        method: "POST",
        credentials: 'include'
      })

      setUser(null)
      toast.success("Logout successfull.")
    } catch (error) {
      setUser(null)
      console.log(error)
    }
  }

  return (
    <nav className='bg-white shadow w-full py-1 sticky z-10 top-0'>
      <div className='flex items-center justify-between max-w-6xl mx-auto w-full px-3 lg:px-0'>
        <div className='flex items-center gap-2'>
          <Link to={"/"}>
            <img src="./logo.jpg" alt="logo" loading='lazy' className='rounded h-10 w-10 object-cover cursor-pointer' />
          </Link>
          <div className='md:flex hidden items-center bg-gray-200 px-2 rounded'>
            <FaSearch className='text-gray-800' />
            <input type="text" placeholder='Search' className='outline-none bg-transparent p-2 lg:w-[300px]' />
          </div>
        </div>
        <div className='flex  items-center gap-5  relative'>

          <Link to={"/"} className='flex flex-col items-center cursor-pointer text-gray-600 hover:text-gray-900 justify-center'>
            <FaHome size={25} />
            <span className="text-sm lg:block hidden">Home</span>
          </Link>
          <div className='flex flex-col items-center  cursor-pointer text-gray-600 hover:text-gray-900 justify-center'>
            <BsFillPeopleFill size={25} />
            <span className='text-sm lg:block hidden'>My Network</span>
          </div>
          <div className='flex flex-col items-center  cursor-pointer hover:text-gray-900 justify-center text-gray-600'>
            <IoBag size={25} />
            <span className='text-sm lg:block hidden'>Jobs</span>
          </div>
          <div className='flex flex-col items-center  cursor-pointer hover:text-gray-900 justify-center text-gray-600'>
            <IoNotifications size={25} />
            <span className='text-sm lg:block hidden'>Notifications</span>
          </div>
          <div className='flex flex-col items-center justify-center cursor-pointer text-gray-600 hover:text-gray-900' onClick={() => setIsOpen(!isOpen)}>
            <img src={user.profilePhoto ? user.profilePhoto : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="user" className='rounded-full cursor-pointer h-8 w-8 object-cover' />
            <span className='text-sm lg:block hidden'>Me</span>
          </div>

          {
            user && isOpen && <div className='absolute top-14 md:w-[300px] z-0 w-[250px] lg:top-16 right-0 bg-white shadow rounded-lg border border-gray-200 p-2'>
              <div className='flex items-start gap-2'>
                <img src={user.profilePhoto ? user.profilePhoto : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="user" className='rounded-full cursor-pointer h-12 w-12 object-cover' />
                <div>
                  <h2 className='font-medium text-gray-900 '>{user.fullName}</h2>
                  <p className='text-sm'>{user.headline}</p>
                </div>
              </div>
              <Link to={"/profile"} onClick={()=>setIsOpen(false)} className='w-full rounded-full  py-1 cursor-pointer font-medium  text-sm my-2 border border-blue-800 text-blue-800 hover:ring-2 ring-blue-800 inline-block text-center'>View Profile</Link>
              <hr className='text-gray-200' />
              <b className='text-gray-700 inline-block my-1 font-medium'>Account</b>
              <div className='text-sm text-gray-600 flex flex-col gap-2 mb-2'>

                <p className='hover:underline cursor-pointer'>Settings & Privacy</p>
                <p className='hover:underline cursor-pointer'>Help</p>
                <p className='hover:underline cursor-pointer'>Language</p>


              </div>
              <hr className='text-gray-200' />
              <b className='text-gray-800 font-medium my-1 inline-block'>Manage</b>
              <div className='text-sm text-gray-600 flex flex-col gap-1'>

                <p className='hover:underline cursor-pointer'>Posts & Activity</p>
                <p className='hover:underline cursor-pointer'>Job Posting Account</p>
                <p className='hover:underline cursor-pointer' onClick={handleLogout}>Sign out</p>


              </div>
            </div>
          }

        </div>
      </div>

    </nav>
  )
}

export default Navbar