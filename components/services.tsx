'use client';

import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';

import { fadeIn } from './fade-in';

const services = [
  {
    name: 'UX/UI Design',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime unde animi nostrum a commodi accusantium?',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime unde animi nostrum a commodi accusantium?',
    link: 'Learn more',
  },
  {
    name: 'Digital Marketing',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime unde animi nostrum a commodi accusantium?',
    link: 'Learn more',
  },
  {
    name: 'Product  Branding',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime unde animi nostrum a commodi accusantium?',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            className='flex-1 lg:bg-services bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
            variants={fadeIn({ direction: 'right', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 mb-16 max-w-[455px]'>
              I&rsquo;m a&nbsp;Freelance Front-end Developer with over
              5&nbsp;years of experience.
            </h3>
            <button className='btn btn-sm' type='button'>
              See my work
            </button>
          </motion.div>
          <motion.div
            className='flex-1'
            variants={fadeIn({ direction: 'left', delay: 0.5 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div>
              {services.map((services, index) => {
                const { name, description, link } = services;

                return (
                  <div
                    className='border-b h-[146px] border-white/20 mb-[38px] flex'
                    key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-x tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                        href='#'>
                        <BsArrowUpRight />
                      </a>
                      <a className='text-gradient text-sm' href='#'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
