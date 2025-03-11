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

  return (
    <nav className='fixed bg-bgNavLight h-10 px-3 py-10 mb-4 sm:mb-0 flex items-center justify-between sm:flex-col dark:bg-bgNavDark border-b-[2px] sm:border-r-[2px] sm:border-b-0 border-bgDark dark:border-bgLight w-full sm:h-screen sm:w-[12rem]  select-none z-10 overflow-hidden'>
      {/* Logo */}
      <a href='#home' className='p-3'>
        <div className={`glow-item relative top-6 select-none`}></div>
        <img src={theme === 'dark' ? logo : logoDark} alt='Dogukan Logo' className='w-14 sm:w-16 ' />
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
                <NavItem itemName='Home' link='#home' isMobile={true} />
                <NavItem itemName='Skills' link='#skills' isMobile={true} />
                <NavItem itemName='Projects' link='#projects' isMobile={true} />
                <NavItem itemName='About' link='#about' isMobile={true} />
                <NavItem itemName='Contact' link='#contact' isMobile={true} />
                <SocialMedia isMobile={true} />
              </ul>
            </div>
          </div>
        )}
      </>

      {/* Desktop */}
      <>
        <ul className='hidden sm:flex flex-col gap-y-6 uppercase font-semibold tracking-[-0.4px]'>
          <NavItem itemName='Home' link='#home' />
          <NavItem itemName='Skills' link='#skills' />
          <NavItem itemName='Projects' link='#projects' />
          <NavItem itemName='About' link='#about' />
          <NavItem itemName='Contact' link='#contact' />
        </ul>
      </>
      <SocialMedia />
    </nav>
  );
};

export default Navigation;
