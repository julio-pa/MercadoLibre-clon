import React from 'react';

const ProductHeader = () => {
  return (
    <div className='flex justify-between p-7'>
      <div>
        <h3 className='font-bold text-2xl'>Smartphones</h3>
        <p className='font-light text-sm text-gray-500'>{Math.floor(Math.random() *1000)} resultados</p>
      </div>
      <div className='flex space-x-2 text-sm'>
        <p className='font-semibold'>Ordenar por </p>
        <p>Más relevantes</p>
      </div>
    </div>
  );
}

export default ProductHeader;
