import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import News from "./News"
const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <News/>
        <Footer/>
    </>
  )
}

export default Layout