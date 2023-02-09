import React from 'react';
import { Link } from 'react-router-dom';
import { categorys } from '../../mock/mockData';


const Categorys = () => {
  return (
    <div>
      <h3 className='mt-5 text-3xl text-gray-600 font-light'>Categorías populares</h3>
      <div className='bg-white mt-5 grid grid-flow-row grid-cols-3 rounded-md'>
        {categorys.map(({ name, icon }, index) => (
          <Link key={index}  to={`/products/${name}`}>
            <div className='border border-solid w-full border-gray-200 flex flex-col items-center justify-center hover:cursor-pointer text-blue-600 hover:text-white hover:bg-blue-600 p-7'>
              <span className="material-symbols-outlined text-7xl font-light">
                {icon}
              </span>
              <h6 className='text-center mt-1 uppercase'>{name}</h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categorys;
