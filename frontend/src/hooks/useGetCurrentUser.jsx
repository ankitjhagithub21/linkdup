import { useEffect, useState } from "react"


const useGetCurrentUser = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/current`, {
                    credentials: 'include'
                })

                const data = await res.json()

                if (data.success) {
                    setUser(data.user)
                } else {
                    setUser(null)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [])
    return [user, setUser]
}

export default useGetCurrentUser