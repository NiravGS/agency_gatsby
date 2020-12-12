import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaChevronRight } from "react-icons/fa"
import { BsPlayFill } from "react-icons/bs"


// Style
import Style from "./Sass/Style.module.scss"

// Modal
import Modal from "./Modal"




const Aboutarea = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
        <Container fluid>
          <Row className={`${'align-items-center'}`}>
            <Col lg={6} md={12} className={Style.orderMedia2}>
              <div className={Style.headerContent}>
                <small>Simple & Precious Solution</small>
                <h1>Cognitive Solutions For Cybersecurity</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nmmet, consectetur adiinamon</p>
                <div className={Style.headerButton}>
                  <a href="#" className={Style.btn}>Discover More <FaChevronRight /></a>
                  <a href="#" className={Style.btn}>Get A Quote <FaChevronRight /></a>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} className={`${Style.orderMedia1} ${'pr-0'}`} data-aos="fade-left">
              <div className={`${Style.headerContentImg} ${'text-center'}`}>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </div>
              <div className={Style.headerVideobtn}>
                <a href="#" onClick={() => setModalShow(true)}><BsPlayFill /></a>
                <Modal show={modalShow}
                  onHide={() => setModalShow(false)} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Aboutarea
