import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"
import { FaBars, FaIndustry } from "react-icons/fa"
import links from "../constants/links"
import logo from "../images/logo.png"

const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.tmLogo}>
        <FaIndustry className={styles.logoIndustry} />
        <span className={styles.textUppercase, styles.tmLogoText}>Business Oriented</span>
      </div>
      <img src={logo} className={styles.logoImg} alt="bussines oriented"/>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaBars className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }>
          {links.map((item, index) => {
            return (
              <li key={index} className={styles.navItem}>
                <AniLink fade className={styles.navClick} to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
