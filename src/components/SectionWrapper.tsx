import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  sectionId: string;
}

const SectionWrapper: React.FC<LayoutProps> = ({ children, sectionId }) => {
  return (
    <div id={sectionId} className='min-h-screen w-full flex items-center justify-center'>
      {children}
    </div>
  );
};

export default SectionWrapper;
