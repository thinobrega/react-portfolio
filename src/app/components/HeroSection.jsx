"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
           <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-600 to-cyan-300 '> 
            Hello, I'm {""}
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                "Thiago",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            
            
            </h1>  
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
           <br/> I’m a self taught jr dev looking for my first experience as a programmer.
          </p>
          <div>

            <button 
            
            className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-purple-600 to-cyan-300 hover:bg-slate-200 text-white'>
              
              <a href="https://api.whatsapp.com/send?phone=5585999037775" target='_blank'>
              Hit me a msn
              </a>
              </button>
            
            <button 
                        className='px-1 py-1 w-full bg-gradient-to-br from-blue-900 via-purple-600 to-cyan-300  sm:w-fit  rounded-full bg-transparent hover:bg-slate-800 text-white mt-3'>
             
              <a href='https://drive.google.com/file/d/135EARATCETQhQSjVo9tqtFJ4nZqexrYh/view' target="_blank"><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2' a>Download CV</span></a>
              
              </button>
              

          </div>
        </div>
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image2.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
      </div>
    </section>
  )
}

export default HeroSection