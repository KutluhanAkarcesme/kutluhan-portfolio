import aboutPhoto from '../assets/images/about.jpeg';

const About = () => {
  return (
    <>
      <section id='about' className='bg-cyan-950 relative px-20'>
        <h2
          data-aos='fade-right'
          data-aos-easing='ease-in-sine'
          className='text-4xl text-sky-600 font-semibold pb-3 ms-3 pt-20'
        >
          About Me
        </h2>
        <h2
          data-aos='fade-right'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          className='subtitle text-4xl text-gray-400 pb-20 ms-3'
        >
          WHO AM I
        </h2>
        <div className='grid lg:grid-cols-2 relative gap-10 pb-20 justify-items-center'>
          <img
            data-aos='fade-up-right'
            src={aboutPhoto}
            className='rounded-xl'
            alt=''
            width='400px'
          />
          <div data-aos='fade-down-left' className='m-auto'>
            <h2 className='text-2xl text-sky-300 text font-medium'>
              I'm <span className='text-orange-400'>Kutluhan Akarçeşme</span>
            </h2>
            <br />
            <p className='text-sky-50 text-md'>
            Hello, I’m Kutluhan.
            Since July 2022, I’ve been immersed in the world of back-end development, leveraging a toolkit that includes C#, 
            .NET Core, SQL Server, RESTful API, ASP.NET Core MVC, Git, and JIRA. My commitment to SOLID principles ensures that 
            the code I craft is not just functional, but also clean, comprehensible, and sustainable. I prioritize scalability, 
            manageability, and low maintenance costs while ensuring performance and reliability. Furthermore,I integrate design patterns
            that precisely meet project requirements and devote attention to enhancing front-end user experiences.
            As a dedicated team player, I actively foster a collaborative environment, constantly seeking opportunities to learn and 
            grow in the dynamic software landscape.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
