import React, { useState } from "react"
import Layout from "../components/Layout"
import Product from "../components/Product"
import styles from "../css/product.module.css"
import data from "../constants/products.json"

const Services = () => {
  const [itemType, setItemType] = useState("all")

  return (
    <Layout>
      <>
        <div className={styles.buttonHolder}>
          <button
            onClick={() => setItemType("all")}
            className={itemType === "all" ? "buttonActive" : ""}
          >
            All
          </button>
          <button
            onClick={() => setItemType("lenovo")}
            className={itemType === "lenovo" ? "buttonActive" : ""}
          >
          Lenovo
          </button>
          <button
            onClick={() => setItemType("macbook")}
            className={itemType === "macbook" ? "buttonActive" : ""}
          >
            MacBook
          </button>
          <button
            onClick={() => setItemType("acer")}
            className={itemType === "acer" ? "buttonActive" : ""}
          >
            Acer
          </button>
          <button
            onClick={() => setItemType("legion")}
            className={itemType === "legion" ? "buttonActive" : ""}
          >
            Legion
          </button>
          </div>

        <div className={styles.itemHolder}>
          {data.map((item, key) => {
            return itemType === "all" || item.type === itemType ? (
              <Product
                key={key}
                image={item.image} 
                title={item.title}
                desc={item.description}
              />
            ) : (
              <></>
            )
          })}
        </div>
      </>



      <>

      </>
    </Layout>
  )
}

export default Services
