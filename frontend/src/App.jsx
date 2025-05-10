import { Routes, Route, Navigate } from "react-router-dom"
import { lazy, useContext } from "react"
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const LandingPage = lazy(() => import("./components/LandingPage"));
const Mynetwork = lazy(() => import("./pages/Mynetwork"))
import { AuthContext } from "./context/AuthContext"

import "./App.css"


const App = () => {


  const { user, loading } = useContext(AuthContext)



  if (loading) {
    return <div className="h-screen w-full bg-white flex  items-center justify-center">
      <img src="https://i.pinimg.com/originals/d3/3b/d9/d33bd9baa83a336184055c07dc8ccaa8.gif" alt="" />

    </div>
  }


  return (
    <>

      <Routes>

        <Route path="/" element={user ? <Home /> : <LandingPage />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to={"/"} />} />


        <Route path="mynetwork" element={user ? <Mynetwork /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>

  )
}

export default App