import React from 'react'

function Header() {
  return (
    <div className='flex justify-between lg:p-5 p-2 container mx-auto '>
      <div className='flex justify-between w-full items-center'>
        <span className='uppercase font-secondary font-extrabold block text-transparent bg-clip-text gradient lg:text-4xl text-2xl'>&lt;Antony Dev/&gt;</span>
        <button type='button' className='btn font-tertiary gradient'>Work with me!</button>
      </div>
    </div>
  )
}

export default Header