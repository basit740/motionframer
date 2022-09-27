import React from 'react'
import heading from '../assets/Final-files.png'
import Section from './Section'





const Package = () => {
  return (
<div className='h-full w-full max-w-[1240px]   lg:mx-auto  container  shadow-cyan-600 shadow-2xl'>
    <div className=' flex justify-center items-center self-center py-[50px] '>
        <img className=' w-[150px] lg:w-[250px] ' src={heading} alt="/" />
        <p className=' text-2xl lg:text-4xl ml-2 lg:ml-4 '><span className='text-transparent bg-clip-text bg-gradient-to-br from-[#9408FE] via-indigo-600 to-[#05D4FF] '>+</span></p>
    </div>
    <Section className=' grid lg:max-w-[1240px] justify-center items-center mx-auto  '>
        <div className=' w-full flex justify-center items-center pb-6  '><span className=' text-3xl lg:text-6xl  tracking-wide words font-bold'>PRICING</span></div>
        <div className='grid w-full space-y-6 lg:space-y-0  lg:flex lg:grid-cols-3 justify-center items-center  lg:gap-[100px] py-6  '>
            <div class="  w-[85%] mx-auto lg:w-[25%] max-w-sm bg-gradient-to-br  drop-shadow-2xl from-[#9408FE] via-indigo-600 to-[#05D4FF] rounded-2xl shadow-md p-4 lg:p-8  ">
                <h5 class="mb-4 lg:text-xl text-xs font-medium text-white">Student</h5>
                <div class="flex items-baseline  text-zinc-200">
                    <span class="text-xl lg:text-3xl font-semibold">AED</span>
                    <span class="ml-1 text-2xl lg:text-5xl font-extrabold tracking-tight">55</span>
                    <span class="ml-1 text-xs lg:text-xl font-normal text-zinc-200">/month</span>
                </div>
                <ul class="my-3 space-y-2 lg:my-7 lg:h-[275px] h-[220px] lg:space-y-4">
                    <li class="flex space-x-2 items-baseline self-center">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-zinc-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class=" text-xs lg:text-[16px] lg:leading-6 font-normal  text-white "><span className='text-xs lg:text-lg'>2 X 6</span> kg Coymo Bags</span>
                    </li>
                    <li class="flex space-x-2 items-baseline self-center  ">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-zinc-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] font-normal  text-white ">35 AED Per Extra Bag<span className=' text-xs'><br /> (Max 2)</span></span>
                    </li>
                    <li class="flex space-x-2 items-baseline self-center">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-zinc-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] lg:leading-6 font-normal leading-tight text-white ">5% Discount For Services</span>
                    </li>
                    <li class="flex space-x-2 items-baseline self-center ">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-zinc-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] lg:leading-6 font-normal leading-tight text-white">Free Next Day Delivery </span>
                    </li>
                    <li class="flex space-x-2 items-baseline self-center ">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-zinc-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] lg:leading-6 font-normal leading-tight text-white">Alternate  Plan</span>
                    </li>
                </ul>
                <button type="button" class="text-blue-600 bg-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-xs lg:text-sm px-5 py-1 lg:py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
            </div>
            <div class=" w-[85%] mx-auto lg:w-[25%]  max-w-sm bg-white rounded-2xl border-2 bg-gradient-to-br  drop-shadow-2xl from-zinc-100/10 to-zinc-400/40 shadow-md p-4 lg:p-8  ">
                <h5 class="mb-4 lg:text-xl text-xs font-medium text-gray-500">Standard</h5>
                <div class="flex items-baseline text-gray-900">
                    <span class="text-xl lg:text-3xl font-semibold">AED</span>
                    <span class="text-2xl lg:text-5xl  font-extrabold tracking-tight">125</span>
                    <span class="ml-1 text-xs lg:text-xl font-normal text-gray-500">/month</span>
                </div>
                <ul class="my-3 space-y-2 lg:my-7 lg:space-y-4  lg:h-[275px] h-[220px]">
                    <li class="flex space-x-3 items-baseline self-center">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-blue-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] lg:leading-6 font-normal leading-tight text-gray-500 "><span className='lg:text-lg text-xs'>2  X 12</span> kg Coymo Bags</span>
                    </li>
                    <li class="flex space-x-3 items-baseline self-center">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-blue-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] font-normal  text-gray-500 ">75 AED Per Extra Bag <span className=' text-xs'><br />(Max 2)</span></span>
                    </li>
                    <li class="flex space-x-3 items-baseline self-center">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-blue-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] lg:leading-6 font-normal leading-tight text-gray-500 ">15% Discount for Services</span>
                    </li>
                    <li class="flex space-x-3 items-baseline self-center ">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-blue-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] lg:leading-6 font-normal leading-tight text-gray-500">Free Next Day Delivery</span>
                    </li>
                    <li class="flex space-x-3 items-baseline self-center ">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-blue-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] lg:leading-6 font-normal leading-tight text-gray-500">Same Day Delivery </span>
                    </li>
                    <li class="flex space-x-3 items-baseline self-center ">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-blue-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px]  font-normal leading-tight text-gray-500">Alternate Plan</span>
                    </li>
                </ul>
                <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-xs lg:text-sm px-5 py-1 lg:py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
            </div>
            <div class="  w-[85%] mx-auto lg:w-[25%] max-w-sm bg-gradient-to-br  drop-shadow-2xl from-[#9408FE] via-indigo-600 to-[#05D4FF] rounded-2xl shadow-md p-4 lg:p-8  ">
                <h5 class="mb-4 lg:text-xl text-xs font-medium text-white">Family</h5>
                <div class="flex items-baseline  text-zinc-200">
                    <span class="text-xl lg:text-3xl font-semibold">AED</span>
                    <span class="ml-1 text-2xl lg:text-5xl font-extrabold tracking-tight">249</span>
                    <span class="ml-1 text-xs lg:text-xl font-normal text-zinc-200">/month</span>
                </div>
                <ul class="my-3 space-y-2 lg:my-7 lg:space-y-4 lg:h-[275px] h-[220px]">
                <li class="flex space-x-2 items-baseline self-center">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-zinc-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class=" text-xs lg:text-[16px] lg:leading-6 font-normal  text-white "><span className='text-xs lg:text-lg'>4 X 12</span> kg Coymo Bags</span>
                    </li>
                    <li class="flex space-x-2 items-baseline self-center  ">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-zinc-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] font-normal  text-white ">75 AED Per Extra Bag<span className=' text-xs'><br /> (Max 2)</span></span>
                    </li>
                    <li class="flex space-x-2 items-baseline self-center">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-zinc-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] lg:leading-6 font-normal leading-tight text-white ">15% Discount For Services</span>
                    </li>
                    <li class="flex space-x-2 items-baseline self-center ">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-zinc-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] lg:leading-6 font-normal leading-tight text-white">Free Next Day Delivery </span>
                    </li>
                    <li class="flex space-x-2 items-baseline self-center ">
                        <svg aria-hidden="true" class="flex-shrink-0 self-center  w-3 lg:w-5 h-3 lg:h-5 text-zinc-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-xs lg:text-[16px] lg:leading-6 font-normal leading-tight text-white">Alternate  Plan</span>
                    </li>
                </ul>
                <button type="button" class="text-blue-600 bg-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-xs lg:text-sm px-5 py-1 lg:py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
            </div>
        </div>
    </Section>      
</div>  
  )
}

export default Package