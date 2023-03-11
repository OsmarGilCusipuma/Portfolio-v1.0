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
        <motion.div variants={fade("right", 1)} initial={"init"} whileInView={"view"} className='bg-about flex-1 mx-auto h-[200px] w-[200px] lg:h-[600px]'>
        </motion.div>
        <motion.div variants={fade("left", 1)} initial={"init"} whileInView={"view"} className='flex flex-col justify-center text-left p-5 flex-[2]'>
          <h2 className='text-4xl font-primary font-bold text-[#9b33cc] uppercase'>Sobre mí</h2>
          <h3 className='text-2xl font-secondary text-white font-bold mt-4'>Soy un desarrollador front-end freelancer siempre en busca de algo que aprender</h3>
          <p className='text-white font-tertiary text-xl mt-3 font-light'>Actualmente estoy cursando la carrera de Ingeniería de Sistemas de Información en la Universidad Peruana de Ciencias Aplicadas. Soy una persona analítica y que busca hallar diversas soluciones a los problemas que se me presenten. Me gusta aprender por mi cuenta y mi objetivo a futuro es abarcar el apartado del back-end y desarrollo móvil.</p>
          <div className='flex gap-10 mt-6'>
            <div ref={ref}>
              {inView ? <CountUp className='font-secondary gradient-text text-5xl font-bold' end={8}></CountUp> : null}<span className='font-secondary gradient-text text-xl font-bold'>vo</span>
              <p className='text-white text-xl font-tertiary font-light'>Ciclo</p>
            </div>
            <div>
              {inView ? <CountUp className='font-secondary gradient-text text-5xl font-bold' end={10}></CountUp> : null}
              <p className='text-white text-xl font-tertiary font-light'>Projectos</p>
            </div>
          </div>
          <div className='mt-10'>
            <button className='btn font-tertiary gradient' type='button'>Contáctame</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About