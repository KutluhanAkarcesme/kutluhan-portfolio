import { skillInfos } from '../utils/skills';
import SkillItem from './Skill-Item';
 
const Skills = () => {
  return (
    <section id='skills' className='bg-cyan-950 relative p-20'>
      <h2
        data-aos='fade-right'
        data-aos-easing='ease-in-sine'
        className='text-4xl text-sky-600 font-semibold pb-3 ms-3'
      >
        Skills
      </h2>
      <h2
        data-aos='fade-right'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        className='subtitle text-4xl text-gray-400 pb-20 ms-3'
      >
        MY TOP SKILLS
      </h2>
      <div
        data-aos='fade-up'
        className='grid sm:grid-cols-2 lg:grid-cols-3 relative gap-10'
      >
        {skillInfos.map((item, index) => (
          <SkillItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
};
 
export default Skills;