import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import toast from 'react-hot-toast'

const UpdateProfile = ({ onClose, user,setUser }) => {
    const [userInfo, setUserInfo] = useState({
        fullName: user.fullName || '',
        headline:user.headline || '',
        position:user.position || '',
        location:user.location || '',
        website:user.website || '',
        about:user.about || ''
    })

    const [loading,setLoading] = useState(false)

    const handleChange = (e) => {

        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        try{    
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/update/profile`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:'include',
                body:JSON.stringify(userInfo)
            })
            const data = await res.json();
            if(data.success){

                setUser(data.user)
                onClose(false)
                toast.success(data.message)
            }else{
                toast.error(data.message)
            }

        }catch(error){
            console.log(error.message)
        }finally{
            setLoading(false)
        }

    }
    return (
        <div className='w-full h-screen z-50 flex items-center justify-center p-5 bg-black/50 fixed top-0 left-0'>
            <div className='max-w-lg w-full bg-white rounded-lg px-4  relative'>
                <div className='flex items-center bg-white justify-between sticky py-2 border-gray-300 top-0  border-b'>
                    <h1 className='text-2xl font-medium'>Edit Intro</h1>
                    <MdClose size={25} onClick={() => onClose(false)} cursor={"pointer"} />
                </div>
                <form className='mt-4 mb-2' onSubmit={handleSubmit}>
                    <div className='mb-3 flex flex-col gap-1'>
                        <label htmlFor="fullName" className='text-gray-800 text-sm'>Full Name</label>
                        <input type="text" name='fullName' id='fullName' value={userInfo.fullName} onChange={handleChange} className=' hover:outline border border-gray-600 rounded-lg p-2' required />

                    </div>

                    <div className='mb-3 flex flex-col gap-1'>
                        <label htmlFor="headline" className='text-gray-800 text-sm'>Headline</label>
                        <input type="text" name='headline' id='headline' value={userInfo.headline} onChange={handleChange} className=' hover:outline border border-gray-600 rounded-lg p-2'  />

                    </div>
                    <div className='mb-3 flex flex-col gap-1'>
                        <label htmlFor="position" className='text-gray-800 text-sm'>Current Position</label>
                        <input type="text" name='position' id='position' value={userInfo.position} onChange={handleChange} className=' hover:outline border border-gray-600 rounded-lg p-2' />

                    </div>
                    <div className='mb-3 flex flex-col gap-1'>
                        <label htmlFor="location" className='text-gray-800 text-sm'>Location</label>
                        <input type="text" name='location' id='location' value={userInfo.location} onChange={handleChange} className=' hover:outline border border-gray-600 rounded-lg p-2' />

                    </div>


                    <div className='mb-3 flex flex-col gap-1'>
                        <label htmlFor="website" className='text-gray-800 text-sm'>Website</label>
                        <input type="url" name='website' id='website' value={userInfo.website} onChange={handleChange} className=' hover:outline border rounded-lg p-2'  />

                    </div>
                    
                    <div className='mb-3 flex flex-col gap-1'>
                        <label htmlFor="about" className='text-gray-800 text-sm'>About</label>
                       
                       <textarea name="about" id="about" value={userInfo.about} onChange={handleChange} className=' hover:outline border rounded-lg p-2'></textarea>

                    </div>
                 <div className='flex items-center justify-end'>
                 <button disabled={loading} className='cursor-pointer hover:bg-blue-700 px-4  py-2 bg-blue-600 text-white rounded-full ' type='submit'>
                        {
                            loading ? 'Saving...' :'Save'
                        }
                    </button>
                 </div>
                </form>

               
            </div>
        </div>
    )
}

export default UpdateProfile