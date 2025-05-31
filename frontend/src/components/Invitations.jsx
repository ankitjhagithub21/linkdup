import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import Invitation from "./Invitation"


const Invitations = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/connections`, {
                    credentials: 'include'
                })
                if (res.ok) {
                    const resData = await res.json()
                    setData(resData)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const handleChangeStatus = async (connectionId, status) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/connections/change/status`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify({ connectionId, status })
            })
            const data = await res.json();
            if (data.success) {
                toast.success(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='rounded-lg lg:w-[68%] w-full overflow-hidden border border-gray-300 bg-white'>
            <div className='flex items-center p-4 justify-between'>
                <h2 >Invitations ({data.length})</h2>
                <h2>Show all</h2>
            </div>
            <hr className='text-gray-200' />
            <div>
                {
                    loading ? <p className="p-2">Loading...</p> : data.length === 0 ? <p className="p-2">No invitation Found</p> : data.map((item) => {
                        return <Invitation key={item._id} item={item} changeStatus={handleChangeStatus} />
                    })
                }


            </div>
        </div>
    )
}

export default Invitations