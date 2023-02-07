import React from 'react';
import visa from '../../../img/visa.svg';
import mastercard from '../../../img/mastercard.svg'

const Cuotes = () => {
  return (
    <div className='mt-3'>
      <p>Hasta 12 cuotas</p>
      <div className='flex space-x-0'>
        <img className='w-12 h-9 object-contain' src={visa} alt='visa'/>
        <img className='w-14 h-9 object-contain' src={mastercard} alt='mastercard'/>
      </div>
      <p className='text-sm text-blue-500 hover:cursor-pointer'>Más información</p>
    </div>
  );
}

export default Cuotes;
