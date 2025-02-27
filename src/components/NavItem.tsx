import React from 'react';

type NavItemProps = {
  itemName: string;
  link: string;
  textColor: string;
  isMobile?: boolean;
};

const NavItem = (props: NavItemProps) => {
  const { itemName, link, textColor, isMobile } = props;
  return (
    <li className='cursor-pointer relative group'>
      <a href={link} className={`${!isMobile ? 'text-bgDark hover:text-bgLight dark:text-bgLight dark:hover:text-bgDark' : 'text-[1.5rem] hover:text-accent'} z-10 relative top-0 left-0 transition-all duration-200`}>
        {itemName}
      </a>
      {!isMobile && <p className={`bg-bgLight group-hover:bg-bgDark dark:bg-bgDark dark:group-hover:bg-bgLight w-[13rem] z-0 absolute top-0 left-[-18rem] pt-2 pb-4 group-hover:left-[-6rem] transition-all duration-200 rounded-tr-[3rem] `}></p>}
    </li>
  );
};

export default NavItem;
