import React from 'react'
import styles from "../../css/news.module.css"
import first from "../../images/strategy-1.jpg"
import second from "../../images/strategy-2.jpg"
import third from "../../images/strategy-3.jpg"

const News = () => {
  return (
    <div className={styles.news}>
      <span className={styles.title}>New Focused Strategies</span>
      <div className={styles.first}>
        <img src={first} className={styles.imgStyle} alt="bussines oriented" />
        <div className={styles.test}>
          <h4>Maecenas molestie varius ipsum</h4>
          <p>
            Quisque consectetur ipsum justo, sed posuere massa pretium nec. In
            scelerisque, odio et maximus feugiat, nisl libero porta turpis, quis
            imperdiet odio.
          </p>
        </div>
      </div>
      <div className={styles.second}>
        <img src={second} className={styles.imgStyle} alt="bussines oriented" />
        <div className={styles.test}>
          <h4>Etiam consequat placerat convallis</h4>
          <p>
            Fusce non diam vel diam egestas accumsan quis aliquam metus. Nulla
            porta ullamcorper mauris maximus feugiat. Donec ac tincidunt dui.
          </p>
        </div>
      </div>
      <div className={styles.third}>
        <img src={third} className={styles.imgStyle} alt="bussines oriented" />
        <div className={styles.test}>
          <h4>Aenean varius velit eu ligula</h4>
          <p>
            Suspendisse gravida, ipsum a gravida euismod, metus enim hendrerit
            ante, vel hendrerit sapien sem non nisl. Maecenas tempus risus
            ipsum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default News