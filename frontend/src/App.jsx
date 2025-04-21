import { Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"


const App = () => {
  const {user,loading} = useContext(AuthContext)
  
  if(loading){
    return <div className="h-screen w-full flex flex-col gap-5 items-center justify-center">
      <img src="./logo.jpg" alt="logo" className="w-15 h-16 rounded object-cover" />
      <p className="text-gray-800 font-medium text-lg">Please Wait...</p>
    </div>
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