"use client"

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home () {

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  )
}