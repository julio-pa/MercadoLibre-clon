import React from 'react';

const BuyButtom = () => {
  return (
    <div className='my-6'>
      <div className='flex max-lg:flex-col text-md'>
        <p>Cantidad:</p>
        <select className='focus:outline-none font-semibold w-20 text-sm' name='cantidad'>
          <option>1 unidad</option>
          <option>2 unidades</option>
          <option>3 unidades</option>
          <option>4 unidades</option>
          <option>5 unidades</option>
          <option>6 unidades</option>
          <option>Más de 6 unidades</option>
        </select>
        <p className='text-sm text-gray-400'>({Math.floor(Math.random() * 300)}disponibles)</p>
      </div>
      <div className='flex justify-center items-center mt-6'>
        <button className='bg-blue-500 text-white p-4 rounded-md text-lg w-full font-semibold hover:bg-blue-800'>Comprar ahora</button>
      </div>
    </div>
  );
}

export default BuyButtom;
