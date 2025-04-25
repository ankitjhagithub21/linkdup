import { useEffect,lazy } from "react"
const Feed = lazy(() => import("../components/Feed"));

const Home = () => {

  useEffect(() => {
    document.title = "Feed | Linkedln"
  }, [])

  return (
    <>
    
        <Feed />
    
    </>
  )
}

export default Home