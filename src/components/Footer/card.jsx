import React from 'react';

const Card = ({title, img, desc, link}) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center p-2 '>
          <img className='w-16 h-12 object-contain' src={img} alt='payment' />
          <div className='border-r border-solid border-gray-400 flex flex-col items-center justify-center mt-5'>
            <h3 className='text-lg text-center max-md:w-7/12'>{title}</h3>
            <p className='text-gray-400 w-10/12 text-center text-sm'>{desc}</p>
            <p className='text-blue-500 mt-2 w-10/12 text-sm text-center'>{link}</p>
          </div>
        </div>
    </div>
  );
}

export default Card;
