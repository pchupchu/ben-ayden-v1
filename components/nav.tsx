'use client';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { ReactScroll } from 'react-scroll-ts';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8'>
      <div className='container'>
        <div className='mx-auto flex h-24 w-full max-w-[460px] items-center justify-between rounded-full bg-black/20 px-5 text-2xl text-white/50 backdrop-blur-2xl'>
          <Link
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center'
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}>
            <BiHomeAlt />
          </Link>
          <Link
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center'
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}>
            <BiUser />
          </Link>
          <Link
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center'
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}>
            <BsClipboardData />
          </Link>
          <Link
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center'
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}>
            <BsBriefcase />
          </Link>
          <Link
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center'
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
