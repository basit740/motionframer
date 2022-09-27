import React from 'react'
import phone1 from '../assets/img02.png'

const Service = () => {
  return (
    <div className='h-full w-full max-w-[1240px] lg:bg-transparent  mx-auto container mt-20'>
        <div className='grid lg:flex-1 lg:grid-cols-2 justify-center md:gap-20 md:py-10 '>
            <div className=' max-w-[550px] mt-40 lg:mt-14  mx-10 md:mx-6  '> 
                <h1 className=' text-3xl md:text-4xl font-extrabold text-left'>FIRST <span className='words'>LAUNDRY</span> <br /> <span className='words'>SUBSCRIPTION</span> SERVICE <br /> IN DUBAI</h1>
                <p className=' leading-8 font-light mt-6 lg:mt-12'>Our Service is based on convenience and simplicity, our companys objective is ‘never wash again’ and our main objective is that our customers will never have to wash their own laundry again, our app will focus mainly on our subscription members. </p>
                <p className=' leading-8 font-light mt-6 lg:mt-12'>Coymo will also provide standard services with the main benefits coming from our Membership plans.</p>
                <button className=' mt-4 lg:mt-12 bg-gradient-to-br  from-[#9408FE] via-indigo-600 to-[#05D4FF] py-4 px-6 rounded-xl text-white text-sm'>Download app</button>
            </div>
            <div  className=' max-w-[250px] lg:max-w-[550px] mt-4 lg:mt-14 mx-auto md:mx-6  '>
                <img src={phone1} alt="/" className='' />
            </div>

        </div>
    </div>
  )
}

export default Service