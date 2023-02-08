import React from 'react';
import Characteristics from './Characteristics';
import Description from './Description';
import Payment from './Payment';
import Price from './Price/Price';
import Questions from './Questions';
import Reputation from './Reputation';

const ContainerDetail = ({ img, title, price }) => {
  return (
    <div className='bg-white rounded-md p-4 pl-12'>
      <div className='flex'>
        <div>
          <Characteristics
            img={img}
            title={title}
            price={price} />
          <Description />
        </div>
        <div className='w-4/12'>
          <Price />
          <Reputation />
          <Payment />
        </div>
      </div>
      <hr />
      <Questions />
    </div>
  );
}

export default ContainerDetail;
