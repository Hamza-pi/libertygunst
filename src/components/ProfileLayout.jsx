import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
const ChatLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default ChatLayout