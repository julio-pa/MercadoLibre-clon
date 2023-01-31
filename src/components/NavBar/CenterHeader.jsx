import React from 'react';

const CenterHeader = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex'>
        <input className='rounded-sm w-full h-10 shadow-md focus:outline-none focus:shadow-none ' placeholder='Busca productos, marcas y más...' type='text' />
        <span class="material-symbols-outlined flex bg-white text-md text-gray-400 items-center pr-1 border-l border-solid border-gray-300 rounded-sm shadow-md">
          search
        </span>
      </div>
      <div className='flex mt-7 text-sm justify-start hover:cursor-pointer font-light max-md:hidden'>
        <h5 className='mr-5 hover:font-semibold'>Categorias</h5>
        <h5 className='mr-5 hover:font-semibold'>Historial</h5>
        <h5 className='mr-5 hover:font-semibold'>Vender</h5>
        <h5 className='mr-5 hover:font-semibold'>Ayuda</h5>
      </div>
    </div>
  );
}

export default CenterHeader;
