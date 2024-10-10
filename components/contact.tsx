'use client';

import { motion } from 'framer-motion';

import { fadeIn } from './fade-in';

const Contact = () => {
  return (
    <section className='lg:section py-16' id='contact'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            className='flex-1 flex items-center'
            variants={fadeIn({ direction: 'right', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div>
              <p className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </p>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let&rsquo;s work
                <br />
                together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 pb-24 items-start'
            variants={fadeIn({ direction: 'left', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              placeholder='Your email'
            />
            <textarea
              className='bg-transparent border-b mb-12 py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none'
              placeholder='Your message'></textarea>
            <button className='btn btn-lg' type='submit'>
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
