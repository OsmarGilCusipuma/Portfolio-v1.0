import React from 'react'
import meImage from './../img/development-23.webp'
import { BsGithub,BsLinkedin,BsFacebook,BsWhatsapp } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fade } from '../utils/variants'
import {Link} from 'react-scroll'

function Home() {
  return (
    <div className='section' id='home'>
      <div className='container lg:flex lg:justify-around mx-auto text-white'>
        <div className='flex flex-col lg:justify-center lg:text-left text-center'>
          <motion.h2 variants={fade("up", 1)} initial={"init"} whileInView={"view"} className='text-7xl font-bold uppercase font-primary'>
            Osmar Antony
          </motion.h2>
          <motion.div variants={fade("up", 1.3)} initial={"init"} whileInView={"view"}>
            <div  className='flex lg:justify-start justify-center items-center mt-6 mb-2 lg:mt-4 lg:mb-4 uppercase font-primary'>
              <h3 className='text-4xl'>
                Soy
              </h3>
              <TypeAnimation
                sequence={[
                  "autodidacta",
                  2000,
                  "desarrollador",
                  2000,
                  "estudiante",
                  2000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className='text-4xl ml-3 font-bold text-[#e042b1]'
              />
            </div >
            <p className='text-2xl mt-6 lg:my-0 font-tertiary font-light'>
              Me apasiona el desarrollo web y el desarrollo de sitios web modernos
            </p>
            <div className='flex lg:justify-start justify-center gap-7 lg:my-6 mt-6 mb-8'>
              <a href='https://github.com/OsmarGilCusipuma' target='_blank'>
                <BsGithub className='cursor-pointer onhover' size={32}></BsGithub>
              </a>
              <a href='https://www.linkedin.com/in/osmar-antony-gil-cusipuma-97097a262/' target='_blank'>
                <BsLinkedin className='cursor-pointer onhover' size={32}></BsLinkedin>
              </a>
              <a href='https://www.facebook.com/antonygc2002/' target='_blank'>
                <BsFacebook className='cursor-pointer onhover' size={32}></BsFacebook>
              </a>
              <a href='https://wa.link/1ayc0i' target='_blank'>
                <BsWhatsapp className='cursor-pointer onhover' size={32}></BsWhatsapp>
              </a>
            </div>
            <div className='flex lg:justify-start justify-center items-center lg:gap-8 gap-6'>
              <Link activeClass='is-active' className='cursor-pointer text-slate-200' to='contact' spy={true} smooth={true} offset={50} duration={500}>
                <button className='btn font-tertiary gradient'>Contáctame</button>
              </Link>
              <a className='gradient-text hover:tracking-wider transition-all cursor-pointer text-xl font-bold'>Descarga mi CV</a>
            </div>
          </motion.div>
        </div>
        <motion.img variants={fade("down", 1)} initial={"init"} whileInView={"view"} className='hidden lg:flex' src={meImage} alt='Yo'></motion.img>
      </div>
    </div>
  )
}

export default Home