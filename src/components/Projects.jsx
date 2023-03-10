import React from 'react'
import { motion } from 'framer-motion'
import { fade } from '../utils/variants'
import { PROJECT1,PROJECT2,PROJECT3 } from '../utils/imgs'
import { useState } from 'react'

function Projects() {

  const [effect, setEffect] = useState([false,false,false])

  const worksData = [
    "Coffe Web : HTML5 / CSS3",
    "React Loan Calculator : REACT JS",
    "Restaurant's Table Reservation: HTML5 / CSS3 / JS"
  ]

  function handleChangeOver(idx){
    setEffect( works => works.map((work,index)=> index == idx ? true : false))
  }

  function handleChangeOut(idx){
    setEffect( works => works.map((work,index)=> index == idx && false))
  }

  return (
    <div className='section' id='projects'>
      <div className='container mx-auto max-w-[1200px]'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
          <motion.div variants={fade("right", 1.3)} initial={"init"} whileInView={"view"}>
            <h2 className='font-primary text-[#9b33cc] text-4xl'>My latest works</h2>
            <p className='font-secondary text-2xl text-white py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href='https://github.com/OsmarGilCusipuma' target='_blank' className='inline-block'>
              <button className='btn font-tertiary gradient my-[50px]'>Check all my projects</button>
            </a>
          </motion.div>

          {
            effect.map((img,index) => (
              <motion.div key={index} variants={fade("left", 1.3)} initial={"init"} whileInView={"view"} className='relative border border-slate-300 rounded-[20px]'>
                <div className='overflow-hidden rounded-[20px]'>
                  <img className='hover:brightness-[.3] transition-all hover:scale-[1.15] rounded-[20px]' src={`/src/img/project${index+1}.webp`} onMouseOver={()=> handleChangeOver(index)} onMouseOut={()=> handleChangeOut(index)}>
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