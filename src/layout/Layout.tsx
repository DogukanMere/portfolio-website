import { ReactNode } from 'react';
import Navigation from '../components/Navigation';
import useTheme from '../hooks/useTheme';
import ThemeSwitch from '../components/ThemeSwitch';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='flex flex-col sm:flex-row min-h-screen'>
      <Navigation theme={theme} />
      <ThemeSwitch theme={theme} setTheme={toggleTheme} />
      <div className='sm:pl-[14rem] sm:pr-[2rem] sm:py-4 w-full'>
        <main>{children}</main>

        <footer></footer>
      </div>
    </div>
  );
};

export default Layout;
