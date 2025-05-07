import { Outlet } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext,lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const LandingPage = lazy(() => import("../components/LandingPage"));
const News = lazy(() => import("../components/News"));



const RootLayout = () => {
    const { loading, user } = useContext(AuthContext)

    if (loading) {
        return <div className="h-screen w-full bg-white flex  items-center justify-center">
            <img src="https://i.pinimg.com/originals/d3/3b/d9/d33bd9baa83a336184055c07dc8ccaa8.gif" alt=""  />

        </div>
    }

    if(!user){
        return <LandingPage/>
    }
    return (
       <>
        <Navbar />
        <main className="max-w-6xl mx-auto w-full gap-4 lg:gap-0 px-3 md:px-0 pb-10 flex justify-between items-start
        flex-wrap mt-5">
           
            <Outlet />
            <News/>
        </main>
       </>
    )
}

export default RootLayout