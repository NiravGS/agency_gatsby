import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaChevronRight } from "react-icons/fa"
import { BsPlayFill } from "react-icons/bs"


// Style
import Style from "./Sass/Style.module.scss"





const WhyChooseUs = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "header-video-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <>
      <div className={Style.headerBanner}>
        
      </div>
    </>
  )
}

export default WhyChooseUs
