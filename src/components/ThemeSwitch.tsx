import { FaMoon } from 'react-icons/fa6';
import { IoSunny } from 'react-icons/io5';

type ThemeSwitchProps = {
  theme: string;
  setTheme: () => void;
};

const ThemeSwitch = ({ setTheme, theme }: ThemeSwitchProps) => {
  return (
    <div className='fixed w-10 h-10 right-20 top-[1.3rem] sm:left-[4.2rem] group sm:top-[8rem] bg-bgDark dark:bg-bgLight rounded-full overflow-hidden cursor-pointer select-none z-20' onClick={setTheme}>
      <div className='relative'>
        <FaMoon className='dark:text-bgDark text-bgLight dark:group-hover:text-accent text-[2.5rem] p-[5px] absolute dark:top-0 top-10 transition-all duration-200' />
        <IoSunny className='dark:text-bgDark text-bgLight group-hover:text-yellow text-[2.5rem] p-[5px] absolute top-0 dark:top-10 transition-all duration-200' />
      </div>
    </div>
  );
};

export default ThemeSwitch;
