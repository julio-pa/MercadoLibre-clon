import React from 'react';
import banner from '../../img/bannerML.jpg'

const Banner = () => {
  return (
    <div>
      <img className='w-full h-80 object-cover' src={banner} alt='banner'/>
    </div>
  );
}

export default Banner;
