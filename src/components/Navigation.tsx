import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import logoDark from '../assets/images/logoDark.png';
import { Cross as Hamburger } from 'hamburger-react';
import NavItem from './NavItem';
import SocialMedia from './SocialMedia';

interface NavigationProps {
  theme: string; // 'dark' or 'light'
}

const Navigation: React.FC<NavigationProps> = ({ theme }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    // Prevent scrolling on body when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  console.log(theme);

  return (
    <nav className='fixed bg-bgNavLight h-10 px-3 py-10 mb-4 sm:mb-0 flex items-center justify-between sm:flex-col dark:bg-bgNavDark border-b-[2px] sm:border-r-[2px] sm:border-b-0 border-bgDark dark:border-bgLight w-full sm:h-screen sm:w-[12rem]  select-none z-10'>
      {/* Logo */}
      <a href='#home' className='p-3'>
        <img src={theme === 'dark' ? logo : logoDark} alt='Dogukan Logo' className='w-16 sm:w-24 ' />
      </a>

      {/* Mobile */}
      <>
        {/* Hamburger Icon */}
        <div className='sm:hidden fixed right-5 z-50 cursor-pointer'>
          <Hamburger toggled={isOpen} toggle={toggleMenu} color={`${isOpen ? '#fff' : theme === 'dark' ? '#fff' : '#242424'}`} size={30} rounded label='Show menu' />
        </div>

        {/* Overlay */}
        {isOpen && <div className='sm:hidden fixed inset-0 z-40 bg-blackTransDark' onClick={toggleMenu}></div>}

        {isOpen && (
          <div className='sm:hidden fixed top-0 left-0 w-full h-fit z-40 overflow-y-auto' onClick={toggleMenu}>
            <div className='w-full max-w-[400px] p-8 mx-auto'>
              <ul className='h-screen flex flex-col relative justify-center items-center text-nowrap gap-y-10 font-bold uppercase'>
                <NavItem itemName='Home' link='#home' textColor={theme} isMobile={true} />
                <NavItem itemName='Projects' link='#projects' textColor={theme} isMobile={true} />
                <NavItem itemName='Skills' link='#skills' textColor={theme} isMobile={true} />
                <NavItem itemName='About' link='#about' textColor={theme} isMobile={true} />
                <NavItem itemName='Contact' link='#contact' textColor={theme} isMobile={true} />
                <SocialMedia theme={theme} isMobile={true} />
              </ul>
            </div>
          </div>
        )}
      </>

      {/* Desktop */}
      <>
        <ul className='hidden sm:flex flex-col gap-y-6 uppercase font-semibold text-md tracking-[-0.4px]'>
          <NavItem itemName='Home' link='#home' textColor={theme} />
          <NavItem itemName='Projects' link='#projects' textColor={theme} />
          <NavItem itemName='Skills' link='#skills' textColor={theme} />
          <NavItem itemName='About' link='#about' textColor={theme} />
          <NavItem itemName='Contact' link='#contact' textColor={theme} />
        </ul>
      </>
      <SocialMedia theme={theme} />
    </nav>
  );
};

export default Navigation;
