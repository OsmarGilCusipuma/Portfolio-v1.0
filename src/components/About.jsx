import React from 'react'
import { motion } from 'framer-motion'
import { fade } from '../utils/variants'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'

function About() {

  const {ref,inView} = useInView({

  })

  return (
    <div className='section' id='about'>
      <div className='lg:flex mx-auto gap-[150px] max-w-[1000px]'>
        <motion.div variants={fade("right", 1)} initial={"init"} whileInView={"view"} className='bg-about flex-1 mx-auto h-[350px] w-[300px] lg:h-[600px]'>
        </motion.div>
        <motion.div variants={fade("left", 1)} initial={"init"} whileInView={"view"} className='flex flex-col justify-center text-left p-5 flex-[2]'>
          <h2 className='text-4xl font-primary font-bold text-[#9b33cc] uppercase'>About me</h2>
          <h3 className='text-2xl font-secondary text-white font-bold mt-4'>I'm a freelancer Front-end Developer always learning new things</h3>
          <p className='text-white font-tertiary text-2xl mt-3 font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className='flex gap-10 mt-6'>
            <div ref={ref}>
              {inView ? <CountUp className='font-secondary gradient-text text-5xl font-bold' end={8}></CountUp> : null}
              <p className='text-white text-xl font-tertiary font-light'>Ciclo</p>
            </div>
            <div>
              {inView ? <CountUp className='font-secondary gradient-text text-5xl font-bold' end={5}></CountUp> : null}
              <p className='text-white text-xl font-tertiary font-light'>Projectos</p>
            </div>
          </div>
          <div className='mt-10'>
            <button className='btn font-tertiary gradient' type='button'>Contact me</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About