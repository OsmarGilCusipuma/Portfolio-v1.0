import React from 'react'

function Header() {
  return (
    <div className='flex justify-between lg:p-5 p-3 container mx-auto '>
      <div className='flex justify-between w-full items-center'>
        <a className='uppercase font-secondary font-extrabold block gradient-text lg:text-4xl text-2xl'>&lt;Antony Dev/&gt;</a>
        <button type='button' className='btn font-tertiary gradient'>Trabaja conmigo!</button>
      </div>
    </div>
  )
}

export default Header