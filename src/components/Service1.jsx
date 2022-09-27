import React from 'react'
import phone2 from '../assets/img03.png'

const Service1 = () => {
  return (
<div className='h-full w-full max-w-[1240px] mx-auto container  shadow-cyan-600 shadow-2xl'>
    <div className='grid lg:flex-1 lg:grid-cols-2 justify-center -my-20 lg:my-auto' >
        <div>
            <img src={phone2} alt="/" className='scale-75   ' />
        </div>
        <div className=' max-w-[550px] lg:mt-14 m-6  '> 
            <h1 className=' text-3xl md:text-4xl font-extrabold text-left'>INSTANT <span className='words'>LAUNDRY</span> <br /> <span className='words'>SERVICES</span> IN YOUR <br /> HAND</h1>
            <p className=' leading-8 font-light mt-12'>Coymo provides an on demand laundry service to a  variety of consumers from office workers, families and  students in order to help them save time and money</p>
            <p className=' leading-8 font-light mt-12'>We have introduced a subscription option, <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#9408FE] via-indigo-600 to-[#05D4FF]'>Coymo  Plus</span>, which aims to take the feeling of not having to  worry about your washing to the next level. </p>
            <button className=' mt-12 bg-gradient-to-br  from-[#9408FE] via-indigo-600 to-[#05D4FF] py-4 px-6 rounded-xl text-white text-sm'>Download app</button>
        </div>

    </div>
</div>
  )
}

export default Service1