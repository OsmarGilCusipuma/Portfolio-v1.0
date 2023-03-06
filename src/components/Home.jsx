import React from 'react'
import meImage from './../img/development-23.webp'
import { BsGithub,BsLinkedin,BsFacebook,BsWhatsapp } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'

function Home() {
  return (
    <div className='section' id='home'>
      <div className='container lg:flex lg:justify-around mx-auto text-white'>
        <div className='flex flex-col lg:justify-center lg:text-left text-center'>
          <h2 className='text-7xl font-bold uppercase font-primary'>
            Osmar Antony
          </h2>
          <div className='flex lg:justify-start justify-center items-center mt-6 mb-2 lg:mt-4 lg:mb-4 uppercase font-primary'>
            <h3 className='text-4xl'>
              I'm a 
            </h3>
            <TypeAnimation
              sequence={[
                "student",
                2000,
                "developer",
                2000,
                "enthusiast",
                2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className='text-4xl ml-3 font-bold text-[#e042b1]'
            />
          </div>
          <p className='text-2xl mt-6 lg:my-0 font-secondary'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className='flex lg:justify-start justify-center gap-7 lg:my-6 mt-6 mb-8'>
            <BsGithub className='cursor-pointer onhover' size={32}></BsGithub>
            <BsLinkedin className='cursor-pointer onhover' size={32}></BsLinkedin>
            <BsFacebook className='cursor-pointer onhover' size={32}></BsFacebook>
            <BsWhatsapp className='cursor-pointer onhover' size={32}></BsWhatsapp>
          </div>
          <div className='flex lg:justify-start justify-center items-center lg:gap-8 gap-6'>
            <button className='btn font-tertiary gradient'>Contact me</button>
            <a className='gradient text-transparent bg-clip-text hover:tracking-wider transition-all cursor-pointer text-xl font-bold'>Get my CV</a>
          </div>
        </div>
        <img className='hidden lg:flex' src={meImage} alt='Yo'></img>
      </div>
    </div>
  )
}

export default Home