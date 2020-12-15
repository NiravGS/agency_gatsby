import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Style
import Style from "./Sass/Style.module.scss"

const AboutArea = () => {
  const data = useStaticQuery(graphql`
    query {
      BulbIcon: file(relativePath: { eq: "About/1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CodeIcon: file(relativePath: { eq: "About/2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MonitorIcon: file(relativePath: { eq: "About/3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DartIcon: file(relativePath: { eq: "About/4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Container>
        <Row>
          <Col xl={6}
            className={`${"d-flex"} ${"align-self-center"} ${Style.AboutContent}`}
            data-aos="fade-right"
          >
            <div className={Style.info}>
              <h2 className={Style.infoTitle}>
                Our Company have Business 30 years Over. We Get
                <span> 50+ Award.</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                officiis illo aspernatur debitis sit qui necessitatibus. Aperiam
                quae repellendus perspiciatis? Optio assumenda reprehenderit
                quisquam ad!
              </p>
              <p>
                Facere aliquam optio necessitatibus, unde ullam esse at aperiam
                neque minima asperiores eligendi quisquam? Optio assumenda
                reprehenderit quisquam recusandae ratione et sunt impedit ad!
                ipsum dolor.
              </p>
              <div >
                <Link to="/" className={`${"btn"} ${Style.infoBtn}`}>Learn More</Link>
              </div>
            </div>
          </Col>
          <Col xl={6} className={Style.IconArea} data-aos="fade-left">
            <Row>
                <Col md={6}>
                  <div className={`${Style.Box} ${Style.Box1}`}>
                    <div className={Style.innerBox}>
                      <div className={Style.Icon}>
                        <Img fluid={data.BulbIcon.childImageSharp.fluid} />
                      </div>
                      <h4 className={Style.title}>Creative Design</h4>
                      <p className={Style.text}>
                        Viewing hastily or written dearest elderly up weather.
                        direction so sweetness.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={`${Style.Box} ${Style.Box2}`}>
                    <div className={Style.innerBox}>
                      <div className={Style.Icon}>
                        <Img fluid={data.CodeIcon.childImageSharp.fluid} />
                      </div>
                      <h4 className={Style.title}>Documentation</h4>
                      <p className={Style.text}>
                        Viewing hastily or written dearest elderly up weather.
                        direction so sweetness.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={`${Style.Box} ${Style.Box1}`}>
                    <div className={Style.innerBox}>
                      <div className={Style.Icon}>
                        <Img fluid={data.MonitorIcon.childImageSharp.fluid} />
                      </div>
                      <h4 className={Style.title}>Retina Ready</h4>
                      <p className={Style.text}>
                        Viewing hastily or written dearest elderly up weather.
                        direction so sweetness.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={`${Style.Box} ${Style.Box2}`}>
                    <div className={Style.innerBox}>
                      <div className={Style.Icon}>
                        <Img fluid={data.DartIcon.childImageSharp.fluid} />
                      </div>
                      <h4 className={Style.title}>Weekly Updates</h4>
                      <p className={Style.text}>
                        Viewing hastily or written dearest elderly up weather.
                        direction so sweetness.
                      </p>
                    </div>
                  </div>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutArea
