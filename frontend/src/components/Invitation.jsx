import { useState } from "react"


const Invitation = ({item,changeStatus}) => {
    const [status,setStatus] = useState(item.status)

    const handleClick = (status) => {
        setStatus(status)
        changeStatus(item._id,status)
    }
    return (
        <div className='flex flex-wrap gap-3 items-center p-4 justify-between border-b border-gray-200'>
            <div className='flex gap-2 items-center'>
                <img src={item.sender.profilePhoto ? item.sender.profilePhoto : 'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt={item.sender.fullName} className='w-14 h-14 object-cover rounded-full' />
                <div>
                    <p><span className='font-medium'>{item.sender.fullName}</span> follows you and is inviting you to connect</p>
                    <p className='text-sm text-gray-600'>{item.sender.headline}</p>
                </div>
            </div>
            {
                status === "pending" ?  <div className='flex items-center gap-3 font-medium'>
                    <button className='text-gray-800'  onClick={()=>handleClick('rejected')}>ignore</button>
                    <button onClick={()=>handleClick('accepted')} className='border rounded-full px-4 py-1 border-indigo-800 hover:bg-indigo-200 text-indigo-800 cursor-pointer font-medium'>Accept</button>
                </div> :   <button  className='border rounded-full px-4 py-1 border-green-800 hover:bg-green-200 text-green-600 cursor-pointer font-medium'>{status}</button>
            }
        </div>
    )
}

export default Invitation