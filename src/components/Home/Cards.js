import React from 'react'
import styles from "../../css/cards.module.css"
import JSONData from '../../constants/cards.json';
import { FaCloudSun } from 'react-icons/fa';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const getImages = graphql`
query cardsImage {
  cardsImage: file(relativePath: {eq: "biz-oriented-2.jpg"}) {
    childImageSharp {
      fluid{
         ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Cards = () => {
    const { cardsImage } = useStaticQuery(getImages)
    return (
        <section className={styles.services}>
            <div className={styles.center}>
                {
                    JSONData.content.map((item, index) => {
                        return <article key={index} className={styles.service}>
                            <span><FaCloudSun /></span>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </article>
                    })
                }
                <div className={styles.center}>
                    <div className={styles.bizOriented}>
                    <Img fluid={cardsImage.childImageSharp.fluid} alt="" />
                    </div>
                    <p className={styles.orientedText}>Suspendisse gravida, ipsum a gravida euismod, metus enim hendrerit ante, vel hendrerit sapien sem non nisl. Maecenas tempus risus ipsum.</p>
                </div>
            </div>
        </section>
    )
}

export default Cards

