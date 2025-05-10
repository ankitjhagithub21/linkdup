import { lazy, useEffect } from 'react'
const Navbar = lazy(() => import('../components/Navbar'))
import { BsFillPeopleFill } from "react-icons/bs";
import { FaCalendar, FaUser } from 'react-icons/fa6';


const Mynetwork = () => {

  useEffect(() => {
    document.title = 'Grow | Linkedln'
  }, [])

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto w-full gap-4 lg:gap-0 px-3 md:px-0 pb-10 flex justify-between items-start
        flex-wrap mt-5">
        <div className='rounded-lg lg:w-[30%] w-full  overflow-hidden border border-gray-300 bg-white'>
          <h2 className='font-medium p-4 '>Manage my network</h2>
          <hr className='text-gray-200' />
          <div className='flex p-4 font-medium text-gray-600 items-center justify-between'>
            <span className='flex gap-2 items-center'>
              <BsFillPeopleFill size={20} />
              Connections</span>
            <span>596</span>
          </div>
          <div className='flex p-4 font-medium text-gray-600 items-center justify-between'>
            <span className='flex gap-2 items-center'>
              <FaUser size={18} />
              Following & Followers</span>

          </div>
          <div className='flex p-4 font-medium text-gray-600 items-center justify-between'>
            <span className='flex gap-2 items-center'>
              <BsFillPeopleFill size={20} />
              Groups</span>

          </div>
          <div className='flex p-4 font-medium text-gray-600 items-center justify-between'>
            <span className='flex gap-2 items-center'>
              <FaCalendar />
              Events</span>
            <span>3</span>
          </div>
        </div>
        <div className='rounded-lg lg:w-[68%] w-full overflow-hidden border border-gray-300 bg-white'>
          <div className='flex items-center p-4 justify-between'>
            <h2 className=''>Invitations (17)</h2>
            <h2>Show all</h2>
          </div>
          <hr className='text-gray-200' />
          <div>
            <div className='flex items-center p-4 justify-between border-b border-gray-200'>
              <div className='flex gap-2 items-center'>
                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" className='w-14 h-14 rounded-full'/>
                <div>
                  <p><span className='font-medium'>username</span> follows you and is inviting you to connect</p>
                  <p className='text-sm text-gray-600'>Frontend developer</p>
                </div>
              </div>
              <div className='flex items-center gap-3 font-medium'>
                <button className='text-gray-800'>ignore</button>
                <button className='border rounded-full px-4 py-1 border-indigo-800 hover:bg-indigo-200 text-indigo-800 cursor-pointer font-medium'>Accept</button>
              </div>
            </div>
             <div className='flex items-center p-4 justify-between border-b border-gray-300'>
              <div className='flex gap-2 items-center'>
                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" className='w-14 h-14 rounded-full'/>
                <div>
                  <p><span className='font-medium'>username</span> follows you and is inviting you to connect</p>
                  <p className='text-sm text-gray-600'>Frontend developer</p>
                </div>
              </div>
              <div className='flex items-center gap-3 font-medium'>
                <button className='text-gray-800'>ignore</button>
                <button className='border rounded-full px-4 py-1 border-indigo-800 hover:bg-indigo-200 text-indigo-800 cursor-pointer font-medium'>Accept</button>
              </div>
            </div>
             <div className='flex items-center p-4 justify-between border-b border-gray-300'>
              <div className='flex gap-2 items-center'>
                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" className='w-14 h-14 rounded-full'/>
                <div>
                  <p><span className='font-medium'>username</span> follows you and is inviting you to connect</p>
                  <p className='text-sm text-gray-600'>Frontend developer</p>
                </div>
              </div>
              <div className='flex items-center gap-3 font-medium'>
                <button className='text-gray-800'>ignore</button>
                <button className='border rounded-full px-4 py-1 border-indigo-800 hover:bg-indigo-200 text-indigo-800 cursor-pointer font-medium'>Accept</button>
              </div>
            </div>
            
            
          </div>
        </div>
      </main>
    </>
  )
}

export default Mynetwork