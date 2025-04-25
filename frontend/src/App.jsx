import { Routes, Route, Navigate} from "react-router-dom"
import { lazy} from "react"
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const RootLayout = lazy(() => import("./layouts/RootLayout"));
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

import "./App.css"



const App = () => {

  const { user } = useContext(AuthContext)

  return (
    <>

      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route index path="" element={<Home />} />
          <Route path="profile" element={user ? <Profile /> : <Navigate to={"/"} />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>

  )
}

export default App