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
              Hello, I'm Kutluhan. I graduated from the computer engineering
              department of Inonu University in 2022. Between 2017-2019, I
              worked as an information technology assistant at Derimod Leather
              Clothing and Marketing Inc. for approximately 1 year 10 months.
              Since July 2022, I have been working as a .Net back-end developer
              at NTT Data Business Solutions Turkey. I have a personality that
              is prone to teamwork, adaptable to different situations,
              solution-oriented, and open to learning.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
