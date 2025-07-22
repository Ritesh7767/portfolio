import React from 'react'
import Image from 'next/image'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <div id="skills" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Skills</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I'm Ritesh Gupta, a full-stack web developer skilled in React, Next.js, Node.js, and MongoDB. I love building clean, scalable, and responsive web applications.</p>

        <div className='grid grid-cols-3 sm:grid-cols-7 gap-x-3 gap-y-4 my-10'>
            {
                skills.map((ele, index) => <Image src={ele.src} alt='skill-image' key={index} width={120} height={120} className='border border-gray-50 bg-white rounded-xl shadow-lg hover:-translate-y-3 aspect-square duration-500'/>)
            }
        </div>
    </div>
  )
}

export default Skills