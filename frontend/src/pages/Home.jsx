import { useEffect,lazy } from "react"
import useGetAllPosts from "../hooks/useGetAllPosts";
const UserInfo = lazy(()=>import("../components/UserInfo")) ;
const Feed = lazy(() => import("../components/Feed"));

const Home = () => {



  useEffect(() => {
    document.title = "Feed | Linkedln"
  }, [])
  
  useGetAllPosts()


  return (
    <>
        <UserInfo/>
        <Feed />
    
    </>
  )
}

export default Home