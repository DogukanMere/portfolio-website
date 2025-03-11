import { Carousel, ConfigProvider, Image } from 'antd';
import projects from '../data/projects.ts';
import { FaGithub } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';

const Projects = () => {
  return (
    <div className='py-[3.5rem] sm:py-[5rem] text-center sm:text-start text-primaryDark dark:text-bgLight w-full'>
      {/* Flex Wrapper Container */}
      <div className='flex relative flex-col gap-x-10 gap-y-32 w-full'>
        {projects?.map((project, index) => {
          return (
            <div key={project?.id} className={`flex flex-col lg:flex-row gap-x-10 gap-y-14 w-full justify-center items-center lg:items-stretch lg:h-[290px]`}>
              {/* Carousel */}
              <div className={`flex ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                {project?.img?.length === 1 ? (
                  <Image
                    alt={project.title}
                    src={project.img[0]}
                    width={290} // Set explicit width
                    height={290} // Set explicit height
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Force object-cover effect
                    preview={{ mask: 'Click to preview' }}
                  />
                ) : (
                  <ConfigProvider
                    theme={{
                      token: { colorBgContainer: '#56afff' },
                      components: {
                        Carousel: {
                          dotHeight: 15,
                          dotWidth: 50,
                          dotOffset: -24,
                        },
                      },
                    }}>
                    <Carousel className='w-[290px] h-[290px]' draggable autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
                      {project?.img?.map((img, index) => {
                        return (
                          <div key={index} className='w-[290px] h-[290px] overflow-hidden select-none'>
                            <Image
                              alt={project.title}
                              src={img}
                              width={290} // Set explicit width
                              height={290} // Set explicit height
                              style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Force object-cover effect
                              preview={{ mask: 'Click to preview' }}
                            />
                          </div>
                        );
                      })}
                    </Carousel>
                  </ConfigProvider>
                )}
              </div>
              {/* Details */}
              <div className={`flex flex-col gap-y-2 lg:gap-y-0 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className='text-xl font-semibold uppercase tracking-tighter text-accent w-full border-b-2 border-accent'>{project.title}</h3>

                <p className='pt-6 pb-5 text-base'>{project.description}</p>
                <p className='text-accent inline'>Tech Stack</p>
                <span className=''>{project.skills}</span>
                <div className='flex flex-nowrap w-full justify-center items-center lg:justify-start h-full'>
                  {project.links && (
                    <a href={project.links} target='_blank' rel='noopener noreferrer' className='flex flex-col gap-y-1 justify-center items-center p-2 group rounded-md w-16 h-16 transition-all duration-200'>
                      <FaGithub className={`text-2xl group-hover:text-accent transition-all duration-200`} />
                      <span className='text-xs group-hover:text-accent transition-all duration-200'>Github</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target='_blank' rel='noopener noreferrer' className='flex flex-col gap-y-1 justify-center items-center p-2 group rounded-md w-16 h-16 transition-all duration-200'>
                      <TbWorld className={`text-2xl group-hover:text-accent transition-all duration-200`} />
                      <span className='text-xs group-hover:text-accent transition-all duration-200'>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
