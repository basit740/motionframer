import React from 'react'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

import bigcircle from '../assets/bigcircle.png'
import circle1 from '../assets/circle1.png'
import circle2 from '../assets/circle2.png'
import circle3 from '../assets/circle3.png'
import circle4 from '../assets/circle4.png'

const Review = () => {
  return (
    <div className=' h-full w-full mx-auto sm:my-32 '>
        <div className=' flex justify-center items-center'>
            <h1 className='text-black font-extrabold text-3xl md:text-5xl mt-[0px]'> OUR CUSTOMER <spam className="words">REVIEW</spam></h1>
        </div>
        <div className=' flex justify-center items-center gap-4 md:gap-10 mt-16'>
            <img src={circle1} alt="/" /> 
            <img src={circle2} alt="/" /> 
            <img src={bigcircle} alt="/" /> 
            <img src={circle3} alt="/" /> 
            <img src={circle4} alt="/" /> 
        </div>
        <div className=' flex flex-col justify-center items-center'>
            <p className='max-w-[500px] text-center font-light leading-6 mt-12 text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt corrupti obcaecati blanditiis similique magni consectetur adipisci harum no</p>
            <h1 className=' mt-8 font-extrabold text-lg'>John Doe</h1>
            <p className='text-transparent bg-clip-text bg-gradient-to-br from-[#9408FE] via-indigo-600 to-[#05D4FF] mt-5'>Student</p>
            <div className='flex gap-6 mt-3'>
                <button className=' border-black border-[1px] p-0.5 rounded-full'><IoIosArrowBack size={15} className=' text-black' /> </button>
                <button className=' border-black border-[1px] p-0.5 rounded-full bg-gradient-to-br from-[#9408FE] via-indigo-600 to-[#05D4FF]'><IoIosArrowForward  size={15} className='text-white'/></button>
            </div>
        </div>
    </div>
  )
}

export default Review

