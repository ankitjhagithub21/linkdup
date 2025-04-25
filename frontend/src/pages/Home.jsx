import { useEffect,lazy } from "react"
const UserInfo = lazy(()=>import("../components/UserInfo")) ;
const Feed = lazy(() => import("../components/Feed"));

const Home = () => {

  useEffect(() => {
    document.title = "Feed | Linkedln"
  }, [])

  return (
    <>
        <UserInfo/>
        <Feed />
    
    </>
  )
}

export default Home