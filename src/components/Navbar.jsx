import React from 'react'
import { HiOutlineBriefcase, HiOutlineHome, HiOutlineUser, HiOutlineClipboardCheck } from 'react-icons/hi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {Link} from 'react-scroll'

function Navbar() {

  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-30 p-4 lg:p-0'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-around w-full bg-black/20 h-[65px] backdrop-blur-2xl max-w-[460px] mx-auto rounded-full border-[#C637A0] border'>
          <Link activeClass='is-active' className='cursor-pointer text-slate-200' to='home' spy={true} smooth={true} offset={-110} duration={500}>
            <HiOutlineHome size={24}></HiOutlineHome>
          </Link>
          <Link activeClass='is-active' className='cursor-pointer text-slate-200' to='about' spy={true} smooth={true} offset={50} duration={500}>
            <HiOutlineUser size={24}></HiOutlineUser>
          </Link>
          <Link activeClass='is-active' className='cursor-pointer text-slate-200' to='knowledge' spy={true} smooth={true} offset={50} duration={500}>
            <HiOutlineClipboardCheck size={24}></HiOutlineClipboardCheck>
          </Link>
          <Link activeClass='is-active' className='cursor-pointer text-slate-200' to='projects' spy={true} smooth={true} offset={50} duration={500}>
            <HiOutlineBriefcase size={24}></HiOutlineBriefcase>
          </Link>
          <Link activeClass='is-active' className='cursor-pointer text-slate-200' to='contact' spy={true} smooth={true} offset={50} duration={500}>
            <BiMessageSquareDetail size={24}></BiMessageSquareDetail>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar