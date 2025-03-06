import { FaLinkedin, FaGithub } from 'react-icons/fa6';

type SocialMediaProps = {
  theme: string;
  isMobile?: boolean;
};
const SocialMedia = ({ theme, isMobile }: SocialMediaProps) => {
  const isDarkTheme = theme === 'dark';
  const iconStyle = `text-[2.2rem] text-bgLight hover:text-accent transition-colors duration-200 ${isDarkTheme ? 'sm:text-bgLight' : 'sm:text-primaryDark'}`;

  const socialList = [
    {
      id: 1,
      socialLink: 'https://www.linkedin.com/in/dogukanmere/',
      icon: <FaLinkedin className={iconStyle} />,
    },
    {
      id: 2,
      socialLink: 'https://github.com/DogukanMere',
      icon: <FaGithub className={iconStyle} />,
    },
  ];

  return (
    <div className={`${isMobile ? 'absolute bottom-[5rem] flex gap-x-5' : 'sm:flex hidden gap-x-3 relative bottom-[1rem]'}`}>
      {socialList.map((item) => {
        return (
          <div className='social-link' key={item.id}>
            <a href={item.socialLink} target='_blank' rel='noopener noreferrer'>
              {item.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default SocialMedia;
