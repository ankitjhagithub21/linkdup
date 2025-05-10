import { useEffect, lazy } from "react"
import useGetAllPosts from "../hooks/useGetAllPosts";
const UserInfo = lazy(() => import("../components/UserInfo"));
const Feed = lazy(() => import("../components/Feed"));
const Navbar = lazy(() => import("../components/Navbar"));
const News = lazy(() => import("../components/News"));

const Home = () => {



  useEffect(() => {
    document.title = "Feed | Linkedln"
  }, [])

  useGetAllPosts()


  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto w-full gap-4 lg:gap-0 px-3 md:px-0 pb-10 flex justify-between items-start
        flex-wrap mt-5">
        <UserInfo />
        <Feed />
         <News />
      </main>


    </>
  )
}

export default Home