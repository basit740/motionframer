import React from 'react';
import Typed from 'react-typed';

import phone from '../assets/img01.png'
import playstore from '../assets/playstore.png'
import apple from '../assets/apple.png'



import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='w-full h-[80vh]  flex flex-col justify-between'>
    <div className='grid lg:grid-cols-2 max-w-[1240px] mx-auto my-[70px]'>
        <div className='flex flex-col justify-center items-center md:items-start w-full px-2 py-8 text-white '>
            <motion.h1 initial={{x:'-100vw'}} animate={{x:0}} transition={{type: 'tween',  duration: 2}} className='text-2xl sm:text-2xl md:text-5xl lg:text-7xl hidden md:block  md:leading-[90px] font-bold'>NEVER
            <Typed className='word pl-2 md:pl-4'
            strings={['WASH', 'BOTHER', 'WORRY']}
            typeSpeed={240}
            backSpeed={180}
            loop
            /> <br />  AGAIN</motion.h1>
            <motion.h1 initial={{x:'-100vw'}} animate={{x:0}} transition={{type: 'tween',  duration: 2}} className='text-2xl sm:text-2xl md:text-5xl lg:text-7xl block md:hidden  md:leading-[90px] font-bold'>NEVER WASH AGAIN</motion.h1>
            <motion.p initial={{x:'-100vw'}} animate={{x:0}} transition={{type: 'tween',  duration: 2, delay:1}} className=' text-sm md:text-lg lg:text-xl w-[90%] md:w-[50%] lg:w-[90%] xl:w-[100%] font-thin text-center md:text-left mt-4 md:mt-4'>Coymo has revolutionised laundry. Coymo picks up, cleans, and delivers your laundry and dry cleaning with a click of a button.</motion.p>
                <div className=' flex gap-5 mt-[100px] md:mt-5 md:gap-5 '>
                    <button className=' bg-[#30343F] rounded-xl shadow-lg hover:scale-105 hover:shadow-cyan-500/100'><img className='p-2 lg:p-3' src={playstore} alt="/" /></button>
                    <button className=' bg-[#30343F]  rounded-xl shadow-lg hover:scale-105 hover:shadow-cyan-500/100 '><img className='p-2 lg:p-3' src={apple} alt="/" /></button>
                </div>
        </div>
        <div className=' flex flex-col '>
            <img src={phone} alt="/" className='absolute -z-10 bottom-0 right-0 w-[45%] sm:w-[43%] md:w-[40%] lg:w-[40%] xl:scale-110 sm:max-w-[563px] sm:max-h-[660px]  max-w-[340px] max-h-[430px]' />
        </div>

    </div>

</div>

  )
}

export default Hero