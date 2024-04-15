import { Tooltip } from 'react-tooltip';
import { projectInfos } from '../utils/project';
import ProjectItem from './ProjectItem';
 
const Projects = () => {
  return (
    <section id='projects' className='bg-cyan-950 relative px-20 pb-20 pt-0'>
      <h2
        data-aos='fade-right'
        data-aos-easing='ease-in-sine'
        className='text-4xl text-sky-600 font-semibold pb-3 ms-3'
      >
        Projects
      </h2>
      <h2
        data-aos='fade-right'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        className='subtitle text-4xl text-gray-400 pb-20 ms-3'
      >
        MY OWN WORK
      </h2>
 
      {projectInfos.map((item, index) => (
        <ProjectItem item={item} key={index} />
      ))}
      <Tooltip id='my-tooltip' />
    </section>
  );
};
 
export default Projects;