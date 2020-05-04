import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
