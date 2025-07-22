import React from 'react'
import Image from 'next/image'
import { tools } from '../assets/assets'

const Tools = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center text-5xl font-Ovo'>Tools I use</h2>
        {/* <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'></p> */}

        <div className='grid grid-cols-3 sm:grid-cols-7 gap-x-3 gap-y-4 my-10'>
            {
                tools.map((ele, index) => <Image src={ele.src} alt='skill-image' key={index} width={150} height={150} className='border border-gray-50 bg-white rounded-xl shadow-lg hover:-translate-y-3 aspect-square duration-500'/>)
            }
        </div>
    </div>
  )
}

export default Tools