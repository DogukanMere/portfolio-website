import { FaLinkedin, FaGithub } from 'react-icons/fa6';

type SocialMediaProps = {
  theme: string;
};
const SocialMedia = ({ theme }: SocialMediaProps) => {
  const isDarkTheme = theme === 'dark';
  const iconStyle = `text-[2rem] ${isDarkTheme ? 'text-bgLight' : 'text-bgDark'}`;

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
    <div className='hidden sm:flex gap-x-3 relative bottom-[3rem]'>
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
