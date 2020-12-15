import React from "react"
import Style from "../Sass/Style.module.scss"
import { FaPlay } from "react-icons/fa"
import { Link } from "gatsby"
import { Col } from "react-bootstrap"

const Video = () => {
  return (
    <Col md={10}>
      <div className={Style.videoWrapper}>
        <div className={Style.videoBox}>
          <div className={Style.gradintOverlay}></div>
          <div className={Style.playIcon}>
            <Link>
              <FaPlay />
            </Link>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default Video
