import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "about-01.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "about-02.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Images = () => {
  const data = useStaticQuery(getImages)

  return (
    <Wrapper>
      <article>
        <h3>Erik Morris (Founder and CEO)</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} alt="about ceo" />
      </article>
      <article>
        <h3>Michael Owen (Co-founder / CTO)</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} alt="about co" />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h3 {
    color: #666;
    font-size: 15px;
  }
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Images
