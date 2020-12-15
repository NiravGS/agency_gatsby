import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaChevronRight } from "react-icons/fa"
import { BsPlayFill } from "react-icons/bs"

import Title from "./Elements/Title"
import Video from "./Elements/Video"

// Style
import Style from "./Sass/Style.module.scss"

const WhyChooseUs = () => {
  return (
    <>
      <div className={Style.videoBanner}>
        <div className={Style.background}></div>
        <img
          src={require("../../../../Images/whychooseUs/bgshape1.png")}
          className={Style.shape1}
          alt=""
        />
        <Container>
          <Row className={`${"justify-content-center"}`}>
            <Title />
          </Row>
          <Row className={`${"justify-content-center"}`}>
            <Video />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default WhyChooseUs
