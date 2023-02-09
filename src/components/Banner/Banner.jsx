import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import banner from '../../img/bannerML.jpg'

const Banner = () => {
  return (
    <div>
    <Link to={routes.products}>
      <img className='w-full h-80 object-cover' src={banner} alt='banner'/>
    </Link>
    </div>
  );
}

export default Banner;
