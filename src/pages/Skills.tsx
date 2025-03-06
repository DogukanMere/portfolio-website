import skills from '../data/skills';

const Skills = () => {
  console.log(skills);

  return (
    <div className={`py-[3.5rem] sm:py-[5rem]`}>
      <div className='flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-4 select-none'>
        {skills.map((skill) => {
          return (
            <div
              key={skill.id}
              className='flex flex-col flex-nowrap items-center justify-center bg-none dark:bg-bgDark dark:brightness-110 p-3 py-5 w-[5rem] h-[5.5rem] sm:h-[7.5rem] sm:w-[8rem] gap-y-2 dark:rounded-lg dark:hover:shadow-md dark:hover:shadow-accent transition-shadow duration-200 relative'>
              <img src={skill.icon} alt={skill.title} className={`w-[2rem] sm:w-[3rem] relative top-[-0.4rem]`} />
              <span className='text-[10px] sm:text-base font-semibold text-bgDark dark:text-bgLight text-center text-nowrap absolute bottom-3'>{skill.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
