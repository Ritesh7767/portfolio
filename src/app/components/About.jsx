import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '../assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.profile_img} alt="user" className="w-full rounded-3xl" />
            </div>
            <div className='flex-1'>
                <p className='max-w-2xl font-Ovo'>
                    Hi, I’m Ritesh Laxman Gupta, a BCA student and a passionate full-stack web developer from Mumbai. I specialize in building modern, responsive, and scalable web applications using technologies like React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.
                </p>
                <p className='max-w-2xl font-Ovo'>
                    Over time, I’ve worked on various projects—from e-commerce platforms to blogging applications—focusing on user experience, performance, and code quality. I love turning ideas into functional products and constantly improving my skills through hands-on development.
                </p>
                <p className='max-w-2xl font-Ovo'>I’m currently looking for exciting opportunities where I can contribute, grow, and innovate as a developer.</p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {
                        infoList.map(({icon, title, description}, index)=>(
                        <li key={index} className='border-[0.5px] hover:shadow-lg hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 border-gray-400 rounded-xl p-6 cursor-pointer'>
                            <Image className='w-7 mt-3' alt='title' src={icon}  />
                            <h3 className='my-4 font-semibold'>{title}</h3>
                            <p className='text-sm'>{description}</p>
                        </li>
                    ))
                    }
                </ul>
                {/* <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {
                        toolsData.map((tool, index) => (
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                            </li>
                        ))
                    }
                </ul> */}
            </div>
        </div>

    </div>
  )
}

export default About