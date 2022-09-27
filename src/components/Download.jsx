import React from 'react'
import Section from './Section'

import phone5 from '../assets/image05.png'
import playstore from '../assets/playstore.png'
import apple from '../assets/apple.png'



const Download = () => {
  return (
    <Section>
        <div className='w-full container mx-auto flex justify-center items-center'>
            <div className=' border-[7px] border-cyan-400/100 flex w-[1140px] relative bg-gradient-to-br  from-[#9408FE] via-indigo-600 to-[#05D4FF] rounded-3xl'>
                <div className='grid md:grid-cols-2 lg:max-w-[1240px] '>
                    <div className='flex flex-col justify-center items-start  md:items-center w-full px-2   text-white '>
                        <h1 className='text-3xl md:text-5xl ml-5   font-bold'> <span className='word'>DOWNLOAD </span> IT NOW</h1>
                        <p className='text-xl w-[80%] font-thin ml-5 mt-6 md:mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, adipisci dignissimos? Ratione sed harum qui alos we dont know what is coming</p>
                            <div className=' flex space-x-10  lg:-translate-x-14 md:mt-7 my-8 scale-75 md:scale-100' >
                                <button className=' bg-[#30343F] rounded-xl shadow-lg hover:scale-105 hover:shadow-cyan-500/100'><img className='p-2' src={playstore} alt="/" /></button>
                                <button className=' bg-[#30343F]  rounded-xl shadow-lg hover:scale-105 hover:shadow-cyan-500/100 '><img className='p-3' src={apple} alt="/" /></button>
                            </div>
                    </div>
                    <div className='flex justify-end'>
                        <img src={phone5} alt="/" className=' w-[65%] md:w-[100%] relative bottom-0 left-0'/>
                    </div>
                </div>
            </div>    
        </div>
        </Section>    
  )
}

export default Download