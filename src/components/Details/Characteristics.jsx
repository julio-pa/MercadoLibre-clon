import React from 'react';
import ImageMagnify from './ImageMagnify';


const Characteristics = ({ img, title, price }) => {
  return (
    <>
      <div className='flex w-10/12 max-lg:flex-col-reverse max-md:justify-center max-md:items-center'>
        <img className='w-7/12 h-96 object-contain hover:cursor-zoom-in mr-3  md:hidden' src={img} alt={title} />
        <ImageMagnify imageSrc={img}/>
        <div className='mt-6'>
          <p className='text-sm text-gray-400 mb-1'>Nuevo | +{Math.floor(Math.random() * 1000)} vendidos</p>
          <h2 className='font-semibold text-2xl w-80 max-md:w-56'>{title}</h2>
          <h4 className='text-4xl font-light mt-3'>U$S {price}</h4>
        </div>
      </div>
      <hr className='w-11/12' />
    </>
  );
}

export default Characteristics;
