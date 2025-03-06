import { motion } from 'framer-motion';
import avatar from '../assets/images/dgkn.webp';
import { ReactTyped } from 'react-typed';

const Intro = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className='min-h-screen flex flex-col xl:flex-row items-center justify-center gap-y-16 gap-x-0 sm:gap-x-36 relative'>
      {/* Img Container */}
      <div className='overflow rounded-full w-[13rem] sm:w-[20rem] group order-1 xl:order-2 relative glow-item'>
        <img src={avatar} alt='Dogukan Avatar' className='group-hover:sepia group-hover:contrast-100 contrast-125 transition-all duration-1000 rounded-full' />
      </div>
      {/* Intro */}
      <div className='flex flex-col w-full sm:w-[20rem] md:w-[30rem] lg:w-[35rem] relative order-2 xl:order-1'>
        <h1 className='text-3xl md:text-5xl font-bold text-bgDark opacity-80 dark:opacity-100 dark:text-bgLight whitespace-nowrap tracking-wide'>I AM DOGUKAN MERE,</h1>
        <div className='absolute top-10 md:top-14'>
          <ReactTyped
            strings={['Full Stack Developer', 'Software Engineer', 'Building scalable and interactive web applications', 'Creating modern, fast, and responsive web apps', 'Transforming ideas into functional and beautiful web experiences']}
            typeSpeed={20}
            backSpeed={10}
            loop
            className='text-xl sm:text-lg md:text-4xl text-accent brightness-125 font-semibold tracking-wide'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
