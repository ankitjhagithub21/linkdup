import { Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import LandingPage from "./pages/LandingPage"


const App = () => {
  const {user,loading} = useContext(AuthContext)
  
  if(loading){
    return <LandingPage/>
  }
 
  return (
    <>

      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/signup" element={user ? <Navigate to={"/"} /> : <Signup />} />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />
      </Routes>
    </>

  )
}

export default App