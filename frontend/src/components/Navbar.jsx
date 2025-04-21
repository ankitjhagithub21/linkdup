import { FaHome, FaSearch } from 'react-icons/fa'
import { BsFillPeopleFill } from "react-icons/bs";
import { IoBag, IoNotifications } from "react-icons/io5";
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
  const { user } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='bg-white shadow w-full py-1'>
      <div className='flex items-center justify-between max-w-6xl mx-auto w-full px-3 lg:px-0'>
        <div className='flex items-center gap-2'>
          <img src="./logo.jpg" alt="logo" className='rounded h-10 w-10 object-cover' />
          <div className='md:flex hidden items-center bg-gray-200 px-2 rounded'>
            <FaSearch />
            <input type="text" placeholder='Search' className='outline-none bg-transparent p-2 max-w-md w-full' />
          </div>
        </div>
        <div className='flex  items-center gap-5  relative'>

          <div className='flex flex-col items-center cursor-pointer text-gray-600 hover:text-gray-800 justify-center'>
            <FaHome size={25} />
            <span className="text-sm lg:block hidden">Home</span>
          </div>
          <div className='flex flex-col items-center  cursor-pointer text-gray-600 hover:text-gray-800 justify-center'>
            <BsFillPeopleFill size={25} />
            <span className='text-sm lg:block hidden'>My Network</span>
          </div>
          <div className='flex flex-col items-center  cursor-pointer hover:text-gray-800 justify-center text-gray-600'>
            <IoBag size={25} />
            <span className='text-sm lg:block hidden'>Jobs</span>
          </div>
          <div className='flex flex-col items-center  cursor-pointer hover:text-gray-800 justify-center text-gray-600'>
            <IoNotifications size={25} />
            <span className='text-sm lg:block hidden'>Notifications</span>
          </div>
          <div className='flex flex-col items-center justify-center cursor-pointer text-gray-600 hover:text-gray-800' onClick={() => setIsOpen(!isOpen)}>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" className='rounded-full cursor-pointer h-8 w-8 object-cover' />
            <span className='text-sm lg:block hidden'>Me</span>
          </div>

          {
            user && isOpen && <div className='absolute top-14 lg:top-16 right-0 bg-white shadow rounded-lg border border-gray-200 p-2'>
              <div className='flex items-start gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" className='rounded-full cursor-pointer h-12 w-12 object-cover' />
                <div>
                  <h2 className='font-medium text-gray-900 '>Ankit Jha</h2>
                  <p className='text-sm'>Full Stack Developer and Freelancer</p>
                </div>
              </div>
              <button className='w-full rounded-full  py-1 cursor-pointer font-medium  text-sm my-2 border border-blue-800 text-blue-800 hover:ring-2 ring-blue-800'>View Profile</button>
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
                <p className='hover:underline cursor-pointer'>Sign out</p>



              </div>
            </div>
          }

        </div>
      </div>

    </div>
  )
}

export default Navbar