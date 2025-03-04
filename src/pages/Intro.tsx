import { motion } from 'framer-motion';
import avatar from '../assets/images/dgkn.webp';
import { ReactTyped } from 'react-typed';

const Intro = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className='flex flex-col xl:flex-row items-center justify-center gap-y-16 gap-x-0 sm:gap-y-16 sm:gap-x-20 relative'>
      {/* Img Container */}
      <div className='overflow rounded-full w-[13rem] sm:w-[20rem] group order-1 xl:order-2 relative glow-item'>
        <img src={avatar} alt='Dogukan Avatar' className='group-hover:sepia group-hover:contrast-100 contrast-125 transition-all duration-1000 rounded-full' />
      </div>
      {/* Intro */}
      <div className='flex flex-col w-full sm:w-[20rem] md:w-[30rem] lg:w-[35rem] relative order-2 xl:order-1'>
        <h1 className='text-3xl md:text-5xl font-bold text-bgDark opacity-80 dark:opacity-100 dark:text-bgLight whitespace-nowrap tracking-tight'>I AM DOGUKAN MERE,</h1>
        <div className='absolute top-10 md:top-14'>
          <ReactTyped
            strings={['Full Stack Developer', 'Software Developer', 'Building scalable and interactive web applications', 'Creating modern, fast, and responsive web apps', 'Transforming ideas into functional and beautiful web experiences']}
            typeSpeed={20}
            backSpeed={10}
            loop
            className='text-xl sm:text-lg md:text-4xl text-accent brightness-125 font-semibold leading-6 tracking-normal'
          />
        </div>
      </div>
      <div className='absolute sm:bottom-[-20rem] bottom-[-9rem] group'>
        <button className='text-[1rem] sm:text-[1.2rem] bg-none text-bgDark dark:text-bgLight font-semibold group group-hover:bg-bgDark group-hover:text-bgLight dark:group-hover:bg-bgLight dark:group-hover:text-bgDark px-20 py-2 border-[3px] border-accent transition-all duration-300'>
          Projects
        </button>
      </div>
    </motion.div>
  );
};

export default Intro;
