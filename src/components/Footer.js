import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
      <footer className={styles.footer}>
      <div className={styles.copyright}>
        Copyright &copy; {new Date()
          .getFullYear()} <span className={styles.textPrimary}>Business Oriented</span> - designed by  
          <a href="https://templatemo.com" className={styles.linkPrimary}>TemplateMo</a>
      </div>
      <div className={styles.icons}>
          {socialIcons.map((item, index)=>{
            return (
              <a key={index} href={item.url} className={styles.socialLinks} target="_blank">
              {item.icon}
            </a>
            )
          })}
      </div>
    </footer>
  )
}

export default Footer
