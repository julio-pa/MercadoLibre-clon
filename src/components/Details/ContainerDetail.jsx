import React from 'react';
import Characteristics from './Characteristics';
import Description from './Description';
import Payment from './Payment';
import Price from './Price/Price';
import Questions from './Questions';
import Reputation from './Reputation';

const ContainerDetail = ({ img, title, price }) => {
  return (
    <div className='bg-white rounded-md p-4 pl-12 max-sm:pl-4'>
      <div className='flex max-md:flex-col'>
        <div>
          <Characteristics
            img={img}
            title={title}
            price={price} />
          <div className='max-md:hidden'>
            <Description />
          </div>
        </div>
        <div className='w-4/12 max-md:w-full'>
          <Price />
          <Reputation />
          <Payment />
        </div>
      </div>
      <hr />
      <div className='md:hidden'>
        <Description />
      </div>
      <Questions />
    </div>
  );
}

export default ContainerDetail;
