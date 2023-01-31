import React from 'react';

const Payment = () => {
  return (
    <div className='bg-white flex justify-between'>
      <div className='border-l-4 border-solid border-blue-500 my-1 ml-1 flex flex-col items-center justify-center p-2 max-md:hidden'>
        <h3 className='font-bold'>Paga comodo y seguro</h3>
        <p className='text-gray-400'>con Mercado Pago</p>
      </div>
      <div className='border-l border-solid border-gray-200 flex p-3'>
        <div className='mr-3'>
          <span class="material-symbols-outlined border border-solid border-gray-300 rounded-full p-3 text-blue-600">
            credit_card
          </span>
        </div>
        <div>
          <h3 className='font-bold'>Hasta 12 cuotas</h3>
          <p className='text-blue-500 hover:cursor-pointer'>Ver más</p>
        </div>
      </div>
      <div className='flex p-3 max-md:hidden'>
        <div className='mr-3'>
          <span class="material-symbols-outlined border border-solid border-gray-300 rounded-full p-3 text-blue-600">
            redeem
          </span>
        </div>
        <div>
          <h3 className='font-bold'>Tarjeta de débito</h3>
          <p className='text-blue-500 hover:cursor-pointer'>Ver más</p>
        </div>
      </div>
      <div className='border-l border-solid border-gray-200 flex p-3'>
        <div className='mr-3'>
          <span class="material-symbols-outlined border border-solid border-gray-300 rounded-full p-3 text-blue-600">
            add_circle
          </span>
        </div>
        <div>
          <h3 className='font-bold'>Más medios de pago</h3>
          <p className='text-blue-500 hover:cursor-pointer'>Ver todos</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
