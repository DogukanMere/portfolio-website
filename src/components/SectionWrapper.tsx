import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  sectionId: string;
}

const SectionWrapper: React.FC<LayoutProps> = ({ children, sectionId }) => {
  return (
    <motion.section id={sectionId} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.4 }} className='min-h-screen max-w-[1220px] mx-auto flex items-center justify-center'>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
