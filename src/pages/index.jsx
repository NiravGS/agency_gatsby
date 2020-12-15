import React, { useEffect } from "react"
import Header from "../components/Elements/Header"
import HomeElement from "../components/Pages/Home/HomeElement"
import AboutArea from "../components/Pages/Home/Aboutarea"
import WhyChooseUs from "../components/Pages/Home/WhyChooseUs"
import SectionRight from "../components/Pages/Home/AboutRightSection"

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
      <div id="header">
        <Header />
      </div>
      <section id="homeElement">
        <HomeElement />
      </section>
      <section id={Style.AboutArea}>
        <AboutArea />
      </section>
      <section id={Style.WhyChooseUs}>
        <WhyChooseUs />
      </section>
      <section id={Style.SectionRight}>
        <SectionRight />
      </section>
    </>
  )
}

export default IndexPage
