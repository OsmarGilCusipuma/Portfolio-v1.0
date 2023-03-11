import React from 'react'
import { motion } from 'framer-motion'
import { fade } from '../utils/variants'
import { useState } from 'react'
import PROJECT1 from './../img/project1.webp'
import PROJECT2 from './../img/project2.webp'
import PROJECT3 from './../img/project3.webp'

function Projects() {

  const [effect, setEffect] = useState([false,false,false])

  const worksData = [
    "Coffe Web : HTML5 / CSS3",
    "React Loan Calculator : REACT JS",
    "Restaurant's Table Reservation: HTML5 / CSS3 / JS"
  ]

  const animationDir = [
    {
      dir: 'left',
      speed: 1.3
    },
    {
      dir: 'right',
      speed: 1.3
    },    {
      dir: 'left',
      speed: 1.1
    }
  ]

  function handleChangeOver(idx){
    setEffect( works => works.map((work,index)=> index == idx && true))
  }

  function handleChangeOut(idx){
    setEffect( works => works.map((work,index)=> index == idx && false))
  }

  return (
    <div className='section' id='projects'>
      <div className='container mx-auto max-w-[1200px] max-h-full'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
          <motion.div className='text-center lg:text-left max-w-[400px] mx-auto' variants={fade("right", 1.1)} initial={"init"} whileInView={"view"}>
            <h2 className='font-primary text-[#9b33cc] text-4xl uppercase'>Mis últimos proyectos</h2>
            <p className='font-secondary text-lg text-white py-4'>Páginas web construidas como práctica de las bases del desarrollo web front-end</p>
            <a href='https://github.com/OsmarGilCusipuma' target='_blank' className='inline-block'>
              <button className='btn font-tertiary gradient'>Revisa todos mis proyectos</button>
            </a>
          </motion.div>

          {
            effect.map((img,index) => (
              <motion.div key={index} variants={fade(animationDir[index].dir, animationDir[index].speed)} initial={"init"} whileInView={"view"} className='relative max-w-[450px] mx-auto'>
                <div className='overflow-hidden border-2 border-[#2B125A] rounded-[20px]'>
                  <img className='hover:brightness-[.3] transition-all hover:scale-[1.15] rounded-[20px]' src={index == 0 ? PROJECT1 : index == 1 ? PROJECT2 : PROJECT3} onMouseOver={()=> handleChangeOver(index)} onMouseOut={()=> handleChangeOut(index)}>
                  </img>
                </div>
                {effect[index] ? <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration: 1}} className='absolute bottom-[20px] gradient-text left-3 font-secondary font-bold text-2xl'>{worksData[index]}</motion.p> : null}
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects