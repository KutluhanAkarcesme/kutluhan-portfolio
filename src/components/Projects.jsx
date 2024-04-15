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
      <h2 className='text-3xl text-gray-400 font-semibold mb-8 pb-2'>
        JAVA PROJECT
      </h2>
      <div data-aos='fade-up' className='grid md:grid-cols-2 relative gap-20'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/KutluhanAkarcesme/GiyimTek'
        >
          <div className='flex text-sky-50 font-semibold rounded-xl giyimtekImage projectcard cursor-pointer'>
            <div className='my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl  hover:bg-neutral-500/40'>
              <h2 className='text-2xl text-neutral-800 font-semibold'>
                Giyim Tek
              </h2>
            </div>
          </div>
        </a>
      </div>
      <h2 className='text-3xl text-gray-400 font-semibold mb-8 mt-16 pb-2'>
        .NET API PROJECT
      </h2>
      <div data-aos='fade-up' className='grid md:grid-cols-2 relative gap-20'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/KutluhanAkarcesme/Kodlama.io-.NetCoreProject'
        >
          <div className='flex text-sky-50 font-semibold rounded-xl projectcard projectcardImage cursor-pointer'>
            <div className='my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl hover:bg-neutral-500/40'>
              <h2 className='text-2xl text-neutral-800 font-semibold'>
                Kodlama.io-.NetCoreProject
              </h2>
            </div>
          </div>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/KutluhanAkarcesme/BlazorEksiSozlukClone'
        >
          <div className='flex text-sky-50 font-semibold rounded-xl projectcard projectcardImage cursor-pointer'>
            <div className='my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl  hover:bg-neutral-500/40'>
              <h2 className='text-2xl text-neutral-800 font-semibold'>
                BlazorEksiSozlukClone
              </h2>
            </div>
          </div>
        </a>
      </div>
      <div data-aos='fade-up' className='grid md:grid-cols-2 relative gap-20'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/KutluhanAkarcesme/MVCBlogProject'
        >
          <div className='flex text-sky-50 font-semibold rounded-xl projectcard projectcardImage cursor-pointer'>
            <div className='my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl hover:bg-neutral-500/40'>
              <h2 className='text-2xl text-neutral-800 font-semibold'>
                MVCBlogProject
              </h2>
            </div>
          </div>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/KutluhanAkarcesme/BlazorEksiSozlukClone'
        >
          <div className='flex text-sky-50 font-semibold rounded-xl projectcard projectcardImage cursor-pointer'>
            <div className='my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl  hover:bg-neutral-500/40'>
              <h2 className='text-2xl text-neutral-800 font-semibold'>
                BlazorEksiSozlukClone
              </h2>
            </div>
          </div>
        </a>
      </div>
      <h2 className='text-3xl text-gray-400 font-semibold mb-8 mt-16 pb-2'>
        C# DESKTOP PROJECT
      </h2>
      <div data-aos='fade-up' className='grid md:grid-cols-2 relative gap-20'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/KutluhanAkarcesme/EmployeeProject'
        >
          <div className='flex text-sky-50 font-semibold rounded-xl projectcard employeeProjectImage cursor-pointer'>
            <div className='my-auto mx-auto rounded-lg p-3 bg-neutral-300/40 backdrop-blur-xl hover:bg-neutral-500/40'>
              <h2 className='text-2xl text-neutral-800 font-semibold'>
                EmployeeProject
              </h2>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
