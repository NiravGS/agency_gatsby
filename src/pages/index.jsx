import React, { useEffect } from "react"
import Header from "../components/Elements/Header"
import HomeElement from "../components/Pages/Home/HomeElement"
import AboutArea from "../components/Pages/Home/Aboutarea"
import WhyChooseUs from "../components/Pages/Home/WhyChooseUs"

// style
import "../Sass/global.scss"
import "bootstrap/dist/css/bootstrap.min.css"

// aos
import AOS from "aos"
import "aos/dist/aos.css"

// Style
import Style from "./Sass/Style.module.scss"


const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])
  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section id="homeElement">
        <HomeElement />
      </section>
      <section id={Style.AboutArea}>
        <AboutArea />
      </section>
      <section id={Style.WhyChooseUs}>
        <WhyChooseUs />
      </section>
    </>
  )
}

export default IndexPage
