import React from 'react'
import styles from "../../css/banner.module.css"

 const Banner = ({title, info, children}) => {
    return (
        <div className={styles.banner}>
            <h4>{title}</h4>
            <p>{info}</p>
            {children}
            </div>
    )
}

export default Banner