import { truncateText } from '../utils/utils';
 
export default function ProjectItem({ item }) {
  return (
    <div className='mt-10'>
      <h2 className='text-3xl text-gray-400 font-semibold mb-8 pb-2'>
        {item.projectsTitle}
      </h2>
      <div data-aos='fade-up' className='grid md:grid-cols-2 relative gap-20'>
        {item.projects.map((project, index) => (
          <a target='_blank' rel='noreferrer' href={project.link} key={index}>
            <div
              className={`flex text-sky-50 font-semibold rounded-xl ${
                project.projectClassname
                  ? project.projectClassname
                  : 'projectcardImage'
              } projectcard cursor-pointer`}
            >
              <div
                className='my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl  hover:bg-neutral-500/40'
                data-tooltip-id='my-tooltip'
                data-tooltip-content={project.projectName}
                data-tooltip-place='top'
              >
                <h2 className='text-2xl text-neutral-800 font-semibold'>
                  {truncateText(project.projectName, 20)}
                </h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}