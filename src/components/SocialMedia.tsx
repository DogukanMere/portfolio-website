import { FaLinkedin, FaGithub } from 'react-icons/fa6';

type SocialMediaProps = {
  isMobile?: boolean;
  isInSection?: boolean;
};
const SocialMedia = ({ isMobile, isInSection }: SocialMediaProps) => {
  const iconStyle = `text-[2.2rem] hover:text-accent dark:hover:text-accent transition-colors duration-200 ${isInSection ? 'text-primaryDark dark:text-bgLight' : 'text-bgLight'} dark:sm:text-bgLight sm:text-primaryDark`;

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
    <div className={`${isInSection ? 'flex gap-x-3' : isMobile ? 'absolute bottom-[5rem] flex gap-x-5' : 'sm:flex hidden gap-x-3 relative bottom-[1rem]'}`}>
      {socialList.map((item) => {
        return (
          <div className='social-link' key={item.id}>
            <div className={`glow-item relative top-6 select-none`}></div>
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
