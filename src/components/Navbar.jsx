import React, {useState} from 'react'
import logo from '../assets/coymo.png'

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
const [nav, setNav] = useState(false)
const handleNav = () => {
setNav(!nav)
}  
  return (


        <nav class=" px-2 sm:px-4  py-2.5 ">
            <div class=" flex flex-wrap justify-between items-center lg:container lg:mx-auto">
                <div class="flex items-center ">
                    <img src={logo} class=" h-5 sm:h-7 md:h-9" alt="Flowbite Logo" />
                </div>
                <div className=''>
                    <ul className='hidden  lg:flex text-white text-lg'>
                        <li className=' mr-8'>Home</li>
                        <li className=' mr-8'>About</li>  
                        <li className=' mr-8'>Support </li>  
                        <li className=' mr-8'>Platforms </li>  
                        <li className=' mr-9'>Pricing </li>      
                    </ul>
                </div>
                <div class="hidden lg:flex md:order-2 mt-2 ">
                    <button type="button" class="text-white bg-gradient-to-br from-indigo-500 to-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-7 py-2.5 mr-2 mb-2 focus:outline-none">Log In</button>
                    <button type="button" class="relative inline-flex items-center justify-center p-0.5 mb-2  mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                            Sign Up
                        </span>
                    </button>
                </div>
                <div onClick={handleNav} className=' lg:hidden'>
                {nav ? <AiOutlineClose size={30} className=' text-white'/> : <AiOutlineMenu size={30} className=' text-white'/>}
                </div>


                <div className={nav ? ' w-full bg-gradient-to-br  from-[#9408FE] via-indigo-600 to-[#05D4FF] text-white absolute top-[90px] z-40 left-0 flex justify-center text-center' : 'hidden'}>
                <ul className='lg:hidden py-10'>
                    <li className=' text-lg md:text-2xl'>About </li>
                    <li className=' text-lg md:text-2xl'>Support</li>
                    <li className=' text-lg md:text-2xl'>Platform</li>
                    <li className=' text-lg md:text-2xl'>Pricing</li>
                </ul>
                </div>
            </div>
        </nav>      
  )
}

export default Navbar