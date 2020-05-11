import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "../../css/description.module.css"
import background from "../../images/biz-oriented-1.jpg"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
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
              Header is a parallax background just like in Real Dynamic design
              on TemplateMo. Business Oriented HTML Template is specifically
              designed for your corporate website.
            </p>
            <p className={styles.text}>
              You can download and use this template for your commercial
              purpose. Please do not re-distribute the template ZIP file on any
              template collection website.,
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
