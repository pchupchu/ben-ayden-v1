'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

import { fadeIn } from './fade-in';
import Socials from './socials';

const Banner = () => {
  return (
    <section
      className='flex min-h-[85vh] items-center lg:min-h-[78vh]'
      id='home'>
      <div className='container'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              className='text-[55px] font-bold uppercase leading-[0.8] lg:text-[110px]'
              variants={fadeIn({ direction: 'up', delay: 0.3 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}>
              Ben <span>Aiden</span>
            </motion.h1>
            <motion.div
              className='mb-6 font-secondary text-4xl font-semibold uppercase leading-none lg:text-6xl'
              variants={fadeIn({ direction: 'up', delay: 0.4 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation
                className='text-accent'
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Youtuber',
                  2000,
                ]}
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <p className='mx-auto mb-8 max-w-lg lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              officia alias commodi soluta beatae nulla tenetur accusantium
              laboriosam quasi officiis.
            </p>
            <div className='mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <Link
                to='work'
                smooth
                spy
                className='text-gradient btn-link cursor-pointer'>
                My portfolio
              </Link>
            </div>
            <Socials
              containerStyles='mx-auto flex max-w-max gap-x-6 text-xl lg:mx-0'
              iconStyles=''
            />
          </div>
          <div className='hidden max-w-80 flex-1 lg:flex lg:max-w-[482px]'>
            <Image
              className='w-full'
              src='./avatar.svg'
              width={482}
              height={500}
              priority
              alt='Ben Ayden'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
