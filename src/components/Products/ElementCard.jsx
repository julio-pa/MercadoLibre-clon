import React from 'react';
import cel from '../../img/cel.jpg'

const ElementCard = ({img,product, price}) => {
  return (
    <div className='flex m-5'>
      <img className='object-contain h-44 mx-10' 
      src={img} alt='product' />
      <div>
        <h2 className='text-2xl font-light'>{product}</h2>
        <h4 className='font-semibold text-2xl mt-3'>${price}</h4>
        <p className='text-green-600 font-light text-sm'>en 12x u$S 28.67 sin interés</p>
        <p className='text-green-600 font-semibold text-sm'>Envío gratis</p>
      </div>
    </div>
  );
}

export default ElementCard;
