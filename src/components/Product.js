import React from "react"
import styles from "../css/product.module.css"

const Product = props => (
  <div className={styles.product}>
    <img src={props.image} alt="" />
      <div className={styles.text}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
  </div>
)

export default Product
