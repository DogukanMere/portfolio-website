import { ReactNode } from 'react';
import Navigation from '../components/Navigation';
import useTheme from '../hooks/useTheme';
import ThemeSwitch from '../components/ThemeSwitch';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} id='home' className='flex flex-col sm:flex-row min-h-screen'>
      <Navigation theme={theme} />
      <ThemeSwitch theme={theme} setTheme={toggleTheme} />
      <div className='px-4 sm:pl-[14rem] sm:pr-[2rem] w-full'>
        <main className=''>{children}</main>
        <footer className='w-full text-center py-7 font-medium text-[0.8rem] sm:text-[0.9rem] text-primaryDark dark:text-bgLight'>© Dogukan Mere 2025</footer>
      </div>
    </motion.div>
  );
};

export default Layout;
