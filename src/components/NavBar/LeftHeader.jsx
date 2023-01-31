import React from 'react';
import logo from '../../img/Mercado-Libre-Logo.png'

const LeftHeader = () => {
  return (
    <div className='mr-20 max-md:mr-2'>
      <img className='w-52 h-12 mb-3 object-fill' src={logo} alt='Logo' />
      <div className='flex p-1 rounded-md hover:cursor-pointer hover:border border-solid border-black/10'>
        <span class="material-symbols-outlined font-light">
          location_on
        </span>
        <div>
          <p className='font-light text-xs'>Enviar a </p>
          <p className='font-semibold text-xs'>{" Cuenca"}</p>
        </div>
      </div>
    </div>
  );
}

export default LeftHeader;
