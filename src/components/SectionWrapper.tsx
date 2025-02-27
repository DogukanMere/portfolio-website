import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const SectionWrapper: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SectionWrapper;
