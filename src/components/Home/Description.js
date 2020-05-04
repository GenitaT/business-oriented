import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "../../css/description.module.css"
import background from "../../images/biz-oriented-1.jpg"
import first from "../../images/strategy-1.jpg"
import second from "../../images/strategy-2.jpg"
import third from "../../images/strategy-3.jpg"
const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        firstDescription
        secondDescription
        author
        data {
          name
        }
      }
    }
  }
`
const Description = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)

        return (
          <div className={styles.description}>
            <span className={styles.title}>{data.site.siteMetadata.title}</span>
            <p className={styles.text}>
              {data.site.siteMetadata.firstDescription}
            </p>
            <p className={styles.text}>
              {data.site.siteMetadata.secondDescription}
            </p>
            <img
              src={background}
              className={styles.backgroundImage}
              alt="bussines oriented"
            />
          </div>
        )
      }}
    />
  )
}

export default Description
