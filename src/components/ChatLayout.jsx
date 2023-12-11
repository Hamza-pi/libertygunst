import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
const ChatLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default ChatLayout