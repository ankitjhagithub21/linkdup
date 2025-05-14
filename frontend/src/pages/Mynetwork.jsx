import { lazy, useEffect } from 'react'
const Navbar = lazy(() => import('../components/Navbar'))
const Invitations = lazy(()=>import('../components/Invitations'))
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
       <Invitations/>
      </main>
    </>
  )
}

export default Mynetwork