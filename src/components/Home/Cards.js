import React from 'react'
import styles from "../../css/cards.module.css"
import cards from "../../constants/cards"
import oriented from "../../images/biz-oriented-2.jpg"

 const Cards = () => {
    return (
      <section className={styles.services}>
          <div className={styles.center}>
              {
                    cards.map((item,index)=>{
                      return <article key={index} className={styles.service}>
                          <span>{item.icon}</span>
                          <h4>{item.title}</h4>
                          <img>{item.image}</img>
                          <p>{item.text}</p>
                      </article>
                  })
              }
          <div className={styles.center}>
           <img src={oriented} className={styles.bizOriented} alt="bussines oriented" />
           <p className={styles.orientedText}>Suspendisse gravida, ipsum a gravida euismod, metus enim hendrerit ante, vel hendrerit sapien sem non nisl. Maecenas tempus risus ipsum.</p>
         </div>    
          </div>
      </section>
    )
}

export default Cards

