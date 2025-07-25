import React from 'react'
import { assets, workData } from '../assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const Work = () => {

  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20' id='projects'>
        <h2 className='text-center text-5xl font-Ovo'>My portfolio</h2>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My latest work</h4>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end as well as back-end development.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 my-10 gap-5'>
            {
                workData.map((project, index)=> (
                    <div key={index} style={{backgroundImage: `url(${project.bgImage.src})`}} className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer shadow-xl border border-gray-300 group`} >
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <Link href={project.link} target='_blank' >
                                    <Image src={assets.send_icon} alt="send_icon" className="w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work