import React from 'react'
import laundry1 from '../assets/laundry1.png'
import laundry02 from '../assets/laundry02.png'
import laundry03 from '../assets/laundry03.png'

import { Parallax, ParallaxLayer } from "@react-spring/parallax";


const About = () => {
  return (
    <div className=' h-full w-full container mx-auto '>
                <div className=' flex justify-center items-center md:mb-10'>
                    <h1 className='text-black font-extrabold text-4xl md:text-5xl'> OUR <spam className="words">FEATURES</spam></h1>
                </div>
                <div className='grid lg:flex md:grid-cols-3 lg:gap-32 justify-center  items-center mt-10 md:mt-0 '>
                    <div className=' flex flex-col justify-center  w-full  items-center'>
                        <img src={laundry1} alt="/" className='rounded-full  md:my-8 w-[30%] md:w-[50%] lg:w-[80%]'/>
                        <h1 className=' md:my-4 w-[70%] h-[70px] lg:h-[110px]  justify-center items-center flex text-center text-lg md:text-xl lg:text-2xl'>Schedule A Pickup 7 Days A Week</h1>
                        <p className='text-center text-sm leading-6 md:text-md w-[80%] lg:h-[70px] md:my-4'>Schedule via the App. We pick up 7 Days A Week between 8AM and 10PM</p>
                    </div>
                    <div className=' flex flex-col justify-center  w-full  items-center mt-10 md:mt-0 '>
                        <img src={laundry03} alt="/" className=' md:my-8  rounded-full w-[30%] md:w-[50%] lg:w-[80%] '/>
                        <h1 className=' md:my-4 w-[70%] h-[70px] lg:h-[110px] justify-center items-center flex text-center text-xl md:text-xl lg:text-2xl'>Enjoy Your <br /> Free Time. </h1>
                        <p className='text-center text-sm leading-6 md:text-md w-[80%] lg:h-[70px] md:my-4'>Let Coymo worry about your Laundry. While you do things you want to do. </p>
                    </div>
                    <div className=' flex flex-col justify-center w-full items-center mt-10 md:mt-0 '>
                        <img src={laundry02} alt="/" className='rounded-full md:my-8  w-[30%] md:w-[50%] lg:w-[80%]'/>
                        <h1 className='  w-[70%] md:my-4 h-[70px] lg:h-[110px]  justify-center items-center flex text-center text-xl md:text-xl lg:text-2xl'>Relax With Delivery Right To Your Door </h1>
                        <p className='text-center leading-6 text-sm md:text-md w-[80%] lg:h-[70px] md:my-4'>Doesnt Matter Where you are, Coymo will handle Getting your Cleaned Laundry to You</p>
                    </div>
                </div>
    </div>
  )
}

export default About

// Enjoy Your <br /> Free Time.  






// Relax With Delivery Right To Your Door