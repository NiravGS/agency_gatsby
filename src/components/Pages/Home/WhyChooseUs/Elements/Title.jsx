import React from "react"
import { Col } from "react-bootstrap"
import Style from "../Sass/Style.module.scss"

const Title = () => {
  return (
    <Col md={10} lg={8}>
      <div className={Style.sectionTitle}>
        <h2>why choose us</h2>
        <p>
          Expenses as material breeding insisted building to in. Continual so
          distrusts pronounce by unwilling listening. Thing do taste on we
          manor.
        </p>
      </div>
    </Col>
  )
}

export default Title
