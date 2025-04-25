import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";


const Feed = () => {

    return (


        <div className="bg-white lg:w-[50%] w-full border border-gray-300 rounded-lg p-3 ">
           
            <div className="flex gap-3 w-full items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-12 h-12  rounded-full" />
                <input type="text" placeholder="Start a post" disabled className="w-full border cursor-pointer  hover:bg-gray-100 border-gray-400 text-sm px-4 py-3 placeholder:text-gray-800 font-medium rounded-full outline-none " />
            </div>
            <div className="md:flex hidden items-center -mb-2 mt-2 justify-between">
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

    )
}

export default Feed