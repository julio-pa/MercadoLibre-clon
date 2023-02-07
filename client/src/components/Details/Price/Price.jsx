import React from 'react';
import BuyButtom from './BuyButtom';
import Cuotes from './Cuotes';
import Shipping from './Shipping';
import Warranty from './Warranty';

const Price = () => {
  return (
    
      <div className='w-full border border-solid border-gray-200 rounded-md p-3 mb-3'>
        <Cuotes />
        <Shipping />
        <BuyButtom />
        <Warranty />
      </div>
  );
}

export default Price;
