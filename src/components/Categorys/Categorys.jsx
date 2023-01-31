import React from 'react';
import { categorys } from '../../mock/mockData';

const Categorys = () => {
  return (
    <div>
      <h3 className='mt-5 text-3xl text-gray-600 font-light'>Categorías populares</h3>
      <div className='bg-white mt-5 grid grid-flow-row grid-cols-3'>
        {categorys.map(({ name, icon }, index) => (
          <div className='flex flex-row'>
            <div key={index} className='border border-solid w-full border-gray-400 flex flex-col items-center justify-center hover:cursor-pointer hover:text-white hover:bg-blue-600 p-7'>
              <span class="material-symbols-outlined text-blue-600 hover:text-white text-7xl">
                {icon}
              </span>
              <p>{name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorys;
