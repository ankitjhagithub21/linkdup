import { Outlet } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext,lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const LandingPage = lazy(() => import("../components/LandingPage"));
const News = lazy(() => import("../components/News"));



const RootLayout = () => {
    const { loading, user } = useContext(AuthContext)

    if (loading) {
        return <div className="h-screen w-full flex  items-center justify-center">
            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*ui9IYpxhk1LNLB1B.gif" alt="" />

        </div>
    }

    if(!user){
        return <LandingPage/>
    }
    return (
       <>
        <Navbar />
        <main className="max-w-6xl mx-auto w-full gap-4 lg:gap-0 px-3 md:px-0 flex justify-between items-start
        flex-wrap mt-5">
           
            <Outlet />
            <News/>
        </main>
       </>
    )
}

export default RootLayout