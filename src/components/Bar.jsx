import React, { useEffect, useState } from 'react';
import happy from '../assets/Book.jpg';
import back from '../assets/back.png';
import img1 from '../assets/img01.png';
import img2 from '../assets/img02.png';
import img3 from '../assets/img03.png';

import { motion, useMotionValue, useTransform } from 'framer-motion';

import tick from '../assets/tick.svg';

const Bar = () => {
	const x = useMotionValue(0);
	const [img, setImg] = useState(happy);

	useEffect(
		() =>
			x.onChange((latest) => {
				console.log(Math.floor(latest));
				const value = Math.floor(latest);
				if (value >= 10 && value <= 100) {
					setImg(img1);
				} else if (value >= 101 && value <= 200) {
					setImg(img2);
				} else if (value >= 201 && value <= 300) {
					setImg(img3);
				} else {
					//
					setImg(happy);
				}
			}),

		[]
	);

	return (
		<div className=' h-[100vh] absolute -z-50  w-full lg:bg-[#72FE08]/30'>
			<div className='h-full w-full  max-w-[1240px] lg:pt-[150px] mx-auto  container'>
				<div className='grid lg:flex-1 max-w-[1240px] lg:grid-cols-2 justify-center gap-10 md:gap-10 lg:my-auto'>
					<div className=' max-w-[550px]   h-[300px] lg:h-full  lg:mx-0'>
						<img
							src={img}
							alt='/'
							className=' w-[75%] h-[100%] object-cover rounded-3xl    md:w-[100%] mx-auto'
						/>
					</div>
					<div className=' relative max-w-[550px] mx-[12%] md:mx-auto mt-[20px] md:mt-[0px] '>
						<h1 className=' text-transparent bg-clip-text bg-gradient-to-br from-[#9408FE] via-indigo-600 to-[#05D4FF]'>
							GET YOUR TIME BACK
						</h1>
						<h1 className=' text-2xl sm:text-3xl md:text-4xl font-extrabold text-left lg:mt-10'>
							START <span className='words'>SAVING 4+ HOURS</span> <br /> A
							MONTH WITH US
						</h1>
						<div className=' h-[12%] flex items-center mt-auto sm:mt-3 md:mt-5'>
							<motion.button
								drag
								dragConstraints={{ left: 0, top: 0, right: 350, bottom: 0 }}
								dragElastic={0.01}
								dragDirectionLock={true}
								style={{ x }}
								className='h-[40px] md:h-[50px] rounded-3xl w-[87px] lg:w-[117px] bg-gradient-to-br  from-[#9408FE] via-indigo-600 to-[#05D4FF]  '
							>
								<p className=' text-white text-xs lg:text-lg'>2 Washes</p>
							</motion.button>

							<div className=' w-[85%] absolute left-0  -z-50 h-2 rounded-2xl  flex bg-gradient-to-br  from-[#9408FE] via-indigo-600 to-[#05D4FF]'></div>
						</div>
						<div className='  flex-row  items-center justify-center mt-auto'>
							<div className=' flex items-center w-full mt-5 '>
								<img src={tick} className=' w-8 md:w-10' alt='/' />
								<p className=' ml-5 leading-8 font-light  '>
									<span className=' lg:text-xl'>
										30 Minutes saved Per Month:
									</span>
									<span className='text-transparent bg-clip-text bg-gradient-to-br from-[#9408FE] via-indigo-600 to-[#05D4FF] lg:ml-3'>
										Catch Up on the Weekly News
									</span>
								</p>
							</div>
							<div className=' flex items-center w-full mt-2 md:mt-5'>
								<img src={tick} className=' w-8 md:w-10' alt='/' />
								<p className=' ml-5 leading-8 font-light'>
									<span className=' lg:text-xl'>4 Hours Saved Per Month:</span>
									<span className='text-transparent bg-clip-text bg-gradient-to-br from-[#9408FE] via-indigo-600 to-[#05D4FF] lg:ml-3'>
										Rewatch The Godfather
									</span>{' '}
								</p>
							</div>
							<div className=' flex items-center w-full mt-2 md:mt-5'>
								<img src={tick} className=' w-8 md:w-10' alt='/' />
								<p className=' ml-5 leading-8 font-light'>
									<span className=' lg:text-xl'>36 Hours Saved Per Year:</span>
									<span className='text-transparent bg-clip-text bg-gradient-to-br from-[#9408FE] via-indigo-600 to-[#05D4FF] lg:ml-3'>
										Read The Harry Potter Book Series
									</span>{' '}
								</p>
							</div>
						</div>
						<button className=' my-4 bg-gradient-to-br  from-[#9408FE] via-indigo-600 to-[#05D4FF] py-4 px-6 rounded-xl text-white text-sm'>
							Schedule Your Pickup
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bar;
