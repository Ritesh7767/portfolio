"use client"

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Work from "./components/Work";

export default function Home () {

  const [dark, setDark] = useState(true)

  const handleDark = () => setDark(prev => !prev)

  useEffect(() => {
      const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      setDark(matchMedia.matches);

      const handleChange = (e) => {
        setDark(e.matches);
      };

      matchMedia.addEventListener('change', handleChange);
      return () => matchMedia.removeEventListener('change', handleChange);
    }, []);

  return (
    <div className={`${dark ? "bg-neutral-900 text-gray-200": ""}`}>
      <Navbar dark={dark} handleDark={handleDark} />
      <Header/>
      <About/>
      <Tools/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}