import React from 'react'
import { assets } from '../assets/assets'
import Image from 'next/image'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Logo/>
            <div className='w-max flex items-center justify-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6' />
                ritesh776782@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>
                © 2025 Ritesh Gupta. All rights reserved.
            </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://github.com/Ritesh7767" target='_blank'>Github</a></li>
                <li><a href="https://www.linkedin.com/in/ritesh7767/" target='_blank'>LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer