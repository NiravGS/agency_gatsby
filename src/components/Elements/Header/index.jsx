import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

// Style
import Style from "./Sass/Style.module.scss"

// icons
import { GoThreeBars } from "react-icons/go"
import { GrFormClose } from "react-icons/gr"



const Header = () => {
  const [active, setActive] = React.useState(false)
  const optionRemove = () => {
    document.getElementsByTagName("html")[0].removeAttribute("class", `${Style.Noscroll}`)
    setActive(!active)
  }
  const optionAdd = () => {
    document.getElementsByTagName("html")[0].setAttribute("class", `${Style.Noscroll}`)
    setActive(!active)
  }
  return (
    <header>
      <Container fluid>
        <div className={Style.menuContainer}>
          <div className={Style.logo}>
            <Link to="/">
              <h1>G-code</h1>
            </Link>
          </div>
          <nav className={active ? `${Style.active}` : `${Style.nav}`}>
            <ul>
              <li>
                <Link to="/" onClick={optionRemove}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/"  onClick={optionRemove}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/"  onClick={optionRemove}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/"  onClick={optionRemove}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/"  onClick={optionRemove}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/"  onClick={optionRemove}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className={Style.menuToggle}
            onClick={() => {setActive(!active)}}
          >
            {active ? (
              <div className={Style.closeIcon} onClick={optionRemove}>
                <GrFormClose />
              </div>
            ) : (
              <div className={Style.menuIcon} onClick={optionAdd}>
                <GoThreeBars />
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
