import { useEffect } from "react"
import Navbar from "../components/Navbar"
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";

const Home = () => {
  useEffect(() => {
    document.title = "Feed | Linkedln"
  }, [])

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto w-full flex justify-between items-start
       flex-wrap mt-5">
        <div className=" rounded-lg lg:w-[22%] w-full overflow-hidden border border-gray-300 bg-white">
          <div className="h-20 bg-gray-500 w-full">

          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-16 h-16 object-cover rounded-full -mt-8 ml-5" />
          <h1 className="mt-3 font-medium text-xl ml-5">Ankit Jha</h1>
          <div className="p-3 text-sm">
            <p>MERN Stack Developer | Core Java | Freelancer</p>
            <p>Bhopal, Madhya Pradesh</p>
            <p>LNCT MCA</p>
          </div>

        </div>
        <div className="bg-white lg:w-[50%] w-full border border-gray-300 rounded-lg p-3 ">
          <div className="flex gap-3 w-full items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-12 h-12  rounded-full" />
            <input type="text" placeholder="Start a post" className="w-full border bg-gray-100 border-gray-600 px-4 py-2 font-medium rounded-full outline-none " />
          </div>
          <div className="flex items-center mt-2 justify-between">
            <div className="flex gap-2 items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              <MdPhotoSizeSelectActual className="text-blue-500" />
              <span>Media</span>
            </div>
            <div className="flex gap-2 items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              <FaClipboardCheck/>
              <span>Contribute expertise</span>
            </div>
            <span>Write article</span>
          </div>
        </div>
        <div className="lg:w-[22%] w-full  bg-white rounded-lg p-3 border border-gray-300"> 
          <h2 className="text-xl font-medium">Trending Now</h2>
         <div className="text-sm text-gray-800 flex flex-col gap-2 mt-3">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, provident.</p>
         </div>
        </div>
      </main>
    </>
  )
}

export default Home