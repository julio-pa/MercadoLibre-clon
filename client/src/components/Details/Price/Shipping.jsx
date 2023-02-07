import React from 'react';

const Shipping = () => {
  return (
    <>
      <div className='flex space-x-2 mt-3'>
        <span class="material-symbols-outlined text-green-600 font-light">
          local_shipping
        </span>
        <div>
          <p className='text-green-600'>Envió gratis a todo el país</p>
          <p className='text-gray-400 text-sm'>Conoce los tiempos y las formas de envío</p>
          <div className='flex text-blue-500 text-sm space-x-1 mt-1'>
            <span class="material-symbols-outlined">
              home_pin
            </span>
            <p>Calcular cuándo llega</p>
          </div>
        </div>
      </div>
      <div className='flex text-sm space-x-1 mt-6'>
        <p>Vendido por</p>
        <p className='text-blue-500 hover:cursor-pointer'>J73FP003G27</p>
      </div>

    </>
  );
}

export default Shipping;
