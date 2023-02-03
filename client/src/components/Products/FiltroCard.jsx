import React from 'react';

const FiltroCard = ({ title, items }) => {
  return (
    <div className=' mb-4'>
      <h3 className='font-semibold'>{title}</h3>
      {
        items.map(({name, cantidad}, index) => (
          <div key={index} className='flex space-x-1 mt-2 hover:cursor-pointer'>
            <p className='font-light text-sm'>{name}</p>
            <p className='font-light text-sm text-gray-500'>{`(${cantidad})`}</p>
          </div>
        ))
      }
    </div>
  );
}

export default FiltroCard;
