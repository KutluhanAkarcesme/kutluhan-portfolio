import React from 'react';

const SocialMedia = () => {
  return (
    <>
      <a
        className='link first bg-sky-800 text-sky-50 font-semibold hover:bg-sky-600 p-4 me-5 mb-5 rounded shadow shadow-sky-800/100'
        rel='noreferrer'
        target='_blank'
        href='https://www.linkedin.com/in/kutluhan-akarcesme-13534b1b3/'
      >
        <i className='fa-brands fa-linkedin-in text-xl'></i>
      </a>
      <a
        className='link second bg-gray-700 text-sky-50 font-semibold hover:bg-gray-800 p-4 me-5 rounded-full shadow shadow-gray-700/100'
        rel='noreferrer'
        target='_blank'
        href='https://github.com/KutluhanAkarcesme'
      >
        <i className='fa-brands fa-github text-2xl'></i>
      </a>
      <a
        className='link second bg-gray-700 text-sky-50 font-semibold hover:bg-gray-800 p-4 px-4 me-5 mt-4 rounded-full shadow shadow-gray-700/100'
        rel='noreferrer'
        target='_blank'
        href='https://medium.com/@kutluhanakarcesme'
      >
        <i className='fa-brands fa-medium'></i>
      </a>
    </>
  );
};

export default SocialMedia;
