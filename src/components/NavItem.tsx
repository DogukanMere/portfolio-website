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
      <a href={link} className={`${!isMobile ? 'text-primaryDark group-hover:text-bgLight dark:text-bgLight dark:group-hover:text-primaryDark text-lg' : 'text-[1.5rem] group-hover:text-accent'} z-10 relative top-0 left-0 transition-all duration-200`}>
        {itemName}
      </a>
      {!isMobile && <a href={link} className={`bg-bgLight group-hover:bg-bgDark dark:bg-bgDark dark:group-hover:bg-bgLight w-[13rem] z-0 absolute top-0 left-[-18rem] pt-3 pb-4 group-hover:left-[-6rem] transition-all duration-200`}></a>}
    </li>
  );
};

export default NavItem;
