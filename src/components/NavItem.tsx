import React from 'react';

type NavItemProps = {
  itemName: string;
  link: string;
  textColor: string;
  textSize: string;
};

const NavItem = (props: NavItemProps) => {
  const { itemName, link, textColor, textSize } = props;
  return (
    <li className='cursor-pointer relative group'>
      <a href={link} className={`${textColor === 'dark' ? 'text-bgLight group-hover:text-bgDark' : 'text-bgDark group-hover:text-bgLight'} z-10 relative top-0 left-0`}>
        {itemName}
      </a>
      <p className={`${textColor !== 'dark' ? 'bg-bgLight group-hover:bg-bgDark' : 'bg-bgDark group-hover:bg-bgLight'} w-[13rem] z-0 absolute top-0 left-[-18rem] pt-2 pb-4 group-hover:left-[-7rem] transition-all duration-200 rounded-tr-lg rounded-br-lg`}></p>
    </li>
  );
};

export default NavItem;
