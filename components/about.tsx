'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import { fadeIn } from './fade-in';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          <motion.div
            className='flex lg:flex-1 bg-about bg-contain bg-no-repeat h-[400px] lg:h-[640px] mix-blend-lighten bg-top'
            variants={fadeIn({ direction: 'right', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}></motion.div>
          <motion.div
            className='flex-1'
            variants={fadeIn({ direction: 'left', delay: 0.5 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I&rsquo;m a&nbsp;Freelance Front-end Developer with over
              5&nbsp;years of experience.
            </h3>
            <p className='mb-6'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              unde animi nostrum a commodi accusantium cum, quis iusto nisi
              libero?
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br /> Completed
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>

            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg' type='button'>
                Contact me
              </button>
              <a className='text-gradient btn-link' href='#'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
