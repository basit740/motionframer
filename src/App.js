import React, {useState} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';




import Hero from './components/Hero';
import group from './assets/group.png'
import Service from './components/Service';
import Service1 from './components/Service1';
import Review from './components/Review';
import Download from './components/Download';
import Package from './components/Package';
import Bar from './components/Bar';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";






function App() {
  return (
    <div className=" font-['Helvetica']">
      <Parallax pages={8} >
        <Parallax offset={0} speed={0.2}>
          <div className=' w-full relative top-0 h-screen min-h-[100%] bg-gradient-to-br  mx-auto  from-[#9408FE] via-indigo-600 to-[#05D4FF]  z-20'>
            <img src={group} alt='/' className=' absolute w-full bottom-0 left-0 -z-10 mix-blend-lighten  ' />
            <Navbar />
            <Hero />
          </div>
        </Parallax>
        <ParallaxLayer offset={1} speed={1.2}>
          <div>
              <Service />
          </div>
        </ParallaxLayer>
        {/* PACKAGE */}
        <ParallaxLayer  offset={2.1} speed={1.8}>
          <div>
                <Service1 />
          </div>
        </ParallaxLayer>
        {/* About */}
        <ParallaxLayer offset={3} speed={0.6}>
          <div>
            <About />
          </div>
        </ParallaxLayer  >
        <ParallaxLayer  offset={4}  speed={1.6}>
          <div>
              <Package />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5.2} speed={0.4}>
          <div>
              <Bar />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.5} speed={0.1}>
          <div>
              <Review />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={7.2} speed={0.4}>
          <div>
            <Download />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
