import spring from '../assets/images/spring.png';
import jira from '../assets/images/Jira.svg';

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
        <div className='bg-neutral-700 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png'
            alt='C#'
            width='50'
            height='50'
          />
          <div className='my-auto ms-3'>
            <h2 className='text-2xl text-sky-50 font-medium'>C#</h2>
          </div>
        </div>
        <div className='bg-neutral-700 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl'>
          <img
            src='https://static.vecteezy.com/system/resources/previews/019/899/953/non_2x/java-free-download-free-png.png'
            alt='JAVA'
            width='50'
            height='50'
          />
          <div className='my-auto ms-3'>
            <h2 className='text-2xl text-sky-50 font-medium'>JAVA</h2>
          </div>
        </div>
        <div className='bg-neutral-700 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl'>
          <img
            src='https://seeklogo.com/images/M/microsoft-sql-server-logo-96AF49E2B3-seeklogo.com.png'
            alt='MSSQL'
            width='50'
            height='50'
          />
          <div className='my-auto ms-3'>
            <h2 className='text-2xl text-sky-50 font-medium'>MSSQL</h2>
          </div>
        </div>
        <div className='bg-neutral-700 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl'>
          <img
            src='https://www.pngkey.com/png/full/466-4667821_postgres-logo.png'
            alt='POSTGRESQL'
            width='50'
            height='50'
          />
          <div className='my-auto ms-3'>
            <h2 className='text-2xl text-sky-50 font-medium'>POSTGRESQL</h2>
          </div>
        </div>
        <div className='bg-neutral-700 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png'
            alt='.NET'
            width='50'
            height='50'
          />
          <div className='my-auto ms-3'>
            <h2 className='text-2xl text-sky-50 font-medium'>.NET</h2>
          </div>
        </div>
        <div className='bg-neutral-700 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl'>
          <img
            src={spring}
            alt='SPRING AND SPRING BOOT'
            width='50'
            height='50'
          />
          <div className='my-auto ms-3'>
            <h2 className='text-2xl text-sky-50 font-medium'>
              SPRING AND SPRING BOOT
            </h2>
          </div>
        </div>
        <div className='bg-neutral-700 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl'>
          <img
            src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
            alt='GIT'
            width='50'
            height='50'
          />
          <div className='my-auto ms-3'>
            <h2 className='text-2xl text-sky-50 font-medium'>GIT</h2>
          </div>
        </div>
        <div className='bg-neutral-700 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl'>
          <img src={jira} alt='JIRA' width='50' height='50' />
          <div className='my-auto ms-3'>
            <h2 className='text-2xl text-sky-50 font-medium'>ATLASSIAN JIRA</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
