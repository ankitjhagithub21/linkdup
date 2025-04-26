import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPosts, setIsLoading } from "../app/slices/postSlice"

const useGetAllPosts = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        const getJobs = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/posts`)
                const data = await res.json();
                if (res.ok) {
                    dispatch(setPosts(data))
                }
            } catch (error) {
                console.log(error)
            } finally {
                dispatch(setIsLoading(false))
            }
        }
        getJobs()
    }, [])

}

export default useGetAllPosts