import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import { categorys } from '../../mock/mockData';

const Categorys = () => {
  return (
    <div>
      <h3 className='mt-5 text-3xl text-gray-600 font-light'>Categorías populares</h3>
      <div className='bg-white mt-5 grid grid-flow-row grid-cols-3 rounded-md'>
        {categorys.map(({ name, icon }, index) => (
          <Link to={routes.products}>
            <div key={index} className='border border-solid w-full border-gray-200 flex flex-col items-center justify-center hover:cursor-pointer hover:text-white hover:bg-blue-600 p-7'>
              <span className="material-symbols-outlined text-blue-600 hover:text-white text-7xl font-light">
                {icon}
              </span>
              <h6 className='text-center mt-1'>{name}</h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categorys;
