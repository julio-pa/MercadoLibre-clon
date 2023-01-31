import React from 'react';

const RightHeader = () => {
  return (
    <div className='ml-20 w-8/12 max-md:ml-3 max-md:w-4'>
      <span class="material-symbols-outlined hidden max-md:block max-md:font-light max-md:text-4xl max-md:cursor-pointer">
        menu
      </span>
      <div className='flex mt-16 text-sm justify-evenly hover:cursor-pointer font-light max-md:hidden'>
        <h5>Crea tu cuenta</h5>
        <h5>Ingresa</h5>
        <h5>Mis compras</h5>
      </div>
    </div>
  );
}

export default RightHeader;
