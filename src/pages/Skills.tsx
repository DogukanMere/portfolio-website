import { skills, technical_skills } from '../data/skills';

const Skills = () => {
  console.log(skills);

  return (
    <div className={`py-[3.5rem] sm:py-[5rem] text-primaryDark dark:text-bgLight`}>
      <div className='flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-4 select-none'>
        {skills.map((skill) => {
          return (
            <div key={skill.id} className='flex flex-col flex-nowrap items-center justify-center bg-none p-3 py-5 w-[5rem] h-[5.5rem] sm:h-[7.5rem] sm:w-[8rem] gap-y-2 relative'>
              <img src={skill.icon} alt={skill.title} className={`w-[2rem] sm:w-[3rem] relative top-[-0.4rem]`} />
              <span className='text-[10px] sm:text-base font-semibold text-primaryDark dark:text-bgLight text-center text-nowrap absolute bottom-3'>{skill.title}</span>
            </div>
          );
        })}
      </div>

      {/* Detailed Skills */}
      <h3 className='mt-16 mb-5 font-bold uppercase text-center sm:text-start text-lg sm:text-xl border-b-[2px] pb-1 sm:pb-2 border-bgDark dark:border-bgLight'>Technical Skills</h3>
      <div className='flex flex-col gap-y-4 sm:gap-y-3 text-center sm:text-start text-sm sm:text-base'>
        {technical_skills.map((category) => {
          return (
            <p key={category.id} className=''>
              <span className='font-bold'>{category.header}</span>
              {category.skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
