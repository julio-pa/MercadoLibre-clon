import React from 'react';

const Reputation = () => {
  return (
    <div className='w-full border border-solid border-gray-200 rounded-md p-3 mb-3'>
      <h4 className='font-semibold my-6'>Información sobre el vendedor</h4>
      <div className='flex gap-1 mb-3'>
        <span className="material-symbols-outlined font-light">
          location_on
        </span>
        <div>
          <h5 className='font-semibold'>Ubicación</h5>
          <p className='text-sm text-gray-400'>Azuay, Cuenca</p>
        </div>
      </div>
      <div className='flex gap-1 mb-3 text-green-600'>
        <span className="material-symbols-outlined font-light">
          verified
        </span>
        <div>
          <h5 className='font-semibold'>MercadoLíder Gold</h5>
          <p className='text-sm text-gray-400'>¡Es uno de los mejores del sitio!</p>
        </div>
      </div>
      <div className='flex w-full justify-between gap-1 mt-2 items-center'>
        <Calification color='bg-red-100' />
        <Calification color='bg-orange-100' />
        <Calification color='bg-yellow-100' />
        <Calification color='bg-green-100' />
        <Calification color='bg-green-600' max />
      </div>
      <div className='flex justify-between'>
        <Facts data='97%' desc='de compradores lo recomiendan'/>
        <Facts data='12 años' desc='vendiendo en Mercado Libre' />
        <Facts data='777' desc='ventas concretadas' />
      </div>
      <p className='mt-5 text-sm text-blue-400 hover:cursor-pointer'>Ver más datos sobre este vendedor</p>
    </div>
  );
}

const Calification = ({ color, max }) => {
  return (
    <div style={max ?{ width: '100%', height: '14px' }:{width: '100%', height: '10px'}} className={color}></div>
  )
}

const Facts = ({data,desc}) => {
  return (
    <div className='border-r border-gray-300 text-center mt-3'>
      <h4 className='text-2xl font-normal'>{data}</h4>
      <p className='text-xs font-light'>{desc}</p>
    </div>
  )
}

export default Reputation;
