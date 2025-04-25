import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Feed = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <div className=" rounded-lg lg:w-[22%] w-full overflow-hidden border border-gray-300 bg-white">
                <div className="h-20 bg-gray-500 w-full">
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-16 h-16 object-cover rounded-full -mt-8 ml-5" />
                <h1 className="mt-3 font-medium text-xl ml-5">{user.fullName}</h1>
                <div className="p-3 text-sm">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ex.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>

            </div>
            <div className="bg-white lg:w-[50%] w-full border border-gray-300 rounded-lg p-3 ">
                <div className="flex gap-3 w-full items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-12 h-12  rounded-full" />
                    <input type="text" placeholder="Start a post" disabled className="w-full border cursor-pointer  hover:bg-gray-100 border-gray-400 text-sm px-4 py-3 placeholder:text-gray-800 font-medium rounded-full outline-none " />
                </div>
                <div className="flex items-center -mb-2 mt-2 justify-between">
                    <div className="flex gap-2 items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <MdPhotoSizeSelectActual size={22} className="text-blue-500" />
                        <span className="text-sm text-gray-600 font-medium">Media</span>
                    </div>
                    <div className="flex gap-2 items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <FaClipboardCheck size={20} className="text-yellow-600" />
                        <span className="text-sm text-gray-600 font-medium">Contribute expertise</span>
                    </div>
                    <div className="flex gap-2 items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <MdArticle size={22} className="text-orange-500" />
                        <span className="text-sm text-gray-600 font-medium">Write Article</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Feed