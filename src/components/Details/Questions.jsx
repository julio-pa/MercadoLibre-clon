import React from 'react';

const Questions = () => {
  return (
    <div>
      <h3 className='py-6 text-2xl'>Preguntas</h3>
      <h6 className='font-semibold mb-3 text-lg'>¿Qué quieres saber?</h6>
      <div className='flex justify-start gap-2'>
        <Badges title='Costo y tiempo de envío'/>
        <Badges title='Medios de pago y promociones'/>
        <Badges title='Garantía'/>
      </div>
      <h6 className='font-semibold mt-6 mb-3 text-lg'>Pregúntale al vendedor</h6>
      <div className='mb-10'>
        <input className='border rounded-md h-12 w w-8/12 max-sm:w-7/12 pl-3 focus:outline-none focus:border-2 border-blue-600' type='text' placeholder='Escribe tu pregunta'/>
        <button className='bg-blue-500 text-white w-40 h-12 max-md:w-24 rounded-md text-lg font-semibold hover:bg-blue-800'>Preguntar</button>
      </div>
      <hr className='mb-3' />
    </div>
  );
}

const Badges = ({title}) => {
  return(
    <div className='rounded-md bg-blue-100 text-blue-600 font-semibold p-2 text-sm hover:cursor-pointer'>{title}</div>
  )
}

export default Questions;
