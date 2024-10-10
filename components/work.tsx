'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { fadeIn } from './fade-in';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container'>
        <div className='grid lg:grid-cols-2 gap-x-10 gap-y-12 mb-10 lg:mb-0'>
          <motion.div
            variants={fadeIn({ direction: 'right', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <h2 className='h2 text-accent leading-tight'>
              My Latest <br /> Work.
            </h2>
            <p className='max-w-sm mb-16'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              unde animi nostrum a commodi accusantium cum.
            </p>
            <button className='btn btn-sm' type='button'>
              View all projects
            </button>
          </motion.div>
          <motion.div
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            variants={fadeIn({ direction: 'left', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <Image
              className='w-full h-full group-hover:scale-125 transition-all duration-500'
              src='/portfolio-img1.png'
              width={2000}
              height={340}
              alt='work 1'
            />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'> UI/UX Design</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='capitalize text-3xl text-white'>
                Project title
              </span>
            </div>
          </motion.div>

          <motion.div
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            variants={fadeIn({ direction: 'right', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <Image
              className='w-full h-full group-hover:scale-125 transition-all duration-500'
              src='/portfolio-img2.png'
              width={2000}
              height={340}
              alt='work 2'
            />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'> UI/UX Design</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='capitalize text-3xl text-white'>
                Project title
              </span>
            </div>
          </motion.div>
          <motion.div
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            variants={fadeIn({ direction: 'left', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <Image
              className='w-full h-full group-hover:scale-125 transition-all duration-500'
              src='/portfolio-img3.png'
              width={2000}
              height={340}
              alt='work 3'
            />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'> UI/UX Design</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='capitalize text-3xl text-white'>
                Project title
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
