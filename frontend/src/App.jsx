import { Routes, Route, Navigate } from "react-router-dom"
import { lazy, useContext, useEffect } from "react"
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const LandingPage = lazy(() => import("./components/LandingPage"));
const Mynetwork = lazy(() => import("./pages/Mynetwork"))
import { AuthContext } from "./context/AuthContext"
import { addPost, setPosts } from "./app/slices/postSlice"
import { useDispatch } from "react-redux";
import "./App.css"
import socket from "./socket";


const App = () => {

 
  const { user, loading } = useContext(AuthContext)

 const dispatch = useDispatch();

  useEffect(() => {
    const handleNewPost = (data) => {
      dispatch(addPost(data.post));
    };
    const handleRemovePost = (data) => {
      dispatch(setPosts(data.posts));
    };


    socket.on("newPost", handleNewPost);
    socket.on('removePost',handleRemovePost)

    return () => {
      socket.off("newPost", handleNewPost);
      socket.off("removePost", handleRemovePost);
    };
  }, []);


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