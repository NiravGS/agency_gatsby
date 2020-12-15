import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Style
import Style from "./Sass/Style.module.scss"

const AboutArea = () => {
  return (
    <>
      <div className={Style.SectionRightFluid}>
        <Container fluid>
          <Row className={`${"align-items-center"}`}>
            <Col lg={6} md={12} className={Style.orderMedia2}  data-aos="fade-right">
              <div className={Style.SectionRightContent}>
                <div className={Style.subTitle}>
                  <p>About Us</p>
                </div>
                <div className={Style.Title}>
                  <h2>We have Creative Team Built your Business</h2>
                </div>
                <div className={Style.paraContent}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. 
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <Link href="#" className={`${"btn"}`}>Learn More </Link>
              </div>
            </Col>
            <Col
              lg={6}
              md={12}
              className={`${Style.orderMedia1} ${"p-0"}`}
              data-aos="fade-left"
            >
              <div className={`${Style.SectionRightImg} ${"text-center"}`}>
                <div className={Style.SectionRight}>
                  <img
                    src={require("../../../../Images/SectionRight/hero.jpg")}
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default AboutArea
