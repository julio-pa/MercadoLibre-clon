import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

const Description = () => {
  return (
    <div>
      <h3 className='text-2xl my-6'>Descripción</h3>
      <div className='w-11/12 text-xl text-gray-500 font-normal text-clip'>
        <LoremIpsum p={3} />
      </div>
    </div>
  );
}

export default Description;
