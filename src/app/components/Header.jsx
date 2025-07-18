import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div id='header' className='pt-24 w-11/12 max-w-2xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4'>
        <div id='top' className=''>
            <Image src={assets.profile_img} alt="" className="rounded-full w-48" />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo '>Hi! I'm Ritesh Gupta <Image src={assets.hand_icon} alt="" className="w-8" /> </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Full Stack Web Developer based on MERN</h1>
        <p className='max-w-2xl mx-auto font-Ovo'>“Full-Stack Developer | Passionate about building modern web apps with React, Node.js & Next.js”</p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} alt="" className="w-4" /> </a>
            <a href="/resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2' >my resume <Image src={assets.download_icon} alt="" className="w-4" /> </a>
        </div>
    </div>
  )
}

export default Header