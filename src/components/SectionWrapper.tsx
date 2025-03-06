import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  sectionId: string;
  isSectionMiddle?: boolean;
  headerName?: string;
}

const SectionWrapper: React.FC<LayoutProps> = ({ children, sectionId, isSectionMiddle, headerName }) => {
  return (
    <motion.section
      id={sectionId}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.4 }}
      className={`max-w-[1220px] mx-auto flex flex-col sm:px-16 ${isSectionMiddle ? 'items-center justify-center' : 'items-start justify-start'}`}>
      {headerName && (
        <div className='relative mx-auto sm:mx-0'>
          <h2 className='uppercase text-bgDark dark:text-bgLight text-2xl sm:text-[3.5rem] font-bold text-center sm:text-start mt-[7rem] sm:mt-10'>{headerName}</h2>
          <div className='glow-header relative top-0 sm:top-2'></div>
        </div>
      )}
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
