export default function SkillItem({ item }) {
    return (
      <div className='bg-neutral-700 flex text-sky-50 font-semibold hover:bg-gray-700 p-5 rounded-xl'>
        <img src={item.skillSrc} alt={item.skillName} width='50' height='50' />
        <div className='my-auto ms-3'>
          <h2 className='text-2xl text-sky-50 font-medium'>{item.skillName}</h2>
        </div>
      </div>
    );
  }