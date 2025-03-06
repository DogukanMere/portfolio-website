import educations from '../data/education';
const About = () => {
  return (
    <div className={`py-[3.5rem] sm:py-[5rem] text-center sm:text-start text-primaryDark dark:text-bgLight`}>
      {/* Bio */}
      <div className='flex flex-col text-sm sm:text-[1rem] leading-7 sm:leading-8 font-medium gap-y-5 mt-4'>
        <p className='text-lg font-semibold'>📍 Toronto, ON</p>
        <p>I’m a Full Stack Developer / Software Engineer with 5+ years of experience building high-performance web applications. My primary tech stack includes React, JavaScript, TypeScript for front-end development and Java Spring Boot, Node.js for scalable backend solutions.</p>
        <p>
          I’ve developed CMS platforms, AI-powered integrations, and cloud-based applications, ensuring seamless user experiences. Passionate about modern front-end technologies, performance optimization, and AI-driven solutions, I thrive in Agile teams, delivering efficient, scalable, and
          user-focused products.
        </p>
      </div>
      {/* Education */}
      <h3 className='mt-16 mb-5 text-accent font-bold uppercase text-lg sm:text-xl border-b-[2px] border-accent pb-1 sm:pb-2'>Education</h3>
      <div className='grid gird-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-6 sm:gap-y-10'>
        {educations.map((e) => {
          return (
            <div className='flex flex-col col-span-1 gap-y-0 sm:gap-y-1 scale-[0.9] sm:scale-[1]'>
              <h4 className='text-lg font-semibold'>{e.degree}</h4>
              <p className='text-sm sm:text-[0.9rem] font-medium'>{e.school}</p>
              <p className='text-sm sm:text-[0.9rem]'>{e.program}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
