import * as React from "react"
import { useState } from "react"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/footer"
import Home from "./components/home/Home"
import Layout from "./components/Layout.scss/Layout"
import Portfolio from "./components/portfolio/Portfolio"
import Skills from "./components/skills/Skills"
import './index.scss'

// markup
const IndexPage = () => {


  return (
    <Layout className="dark-theme">
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage
