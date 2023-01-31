import React from 'react';
import CenterHeader from './CenterHeader';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

const NavBar = () => {
  return (
    <div className='bg-yellow-300 flex justify-between py-2 px-12'>
      <LeftHeader/>
      <CenterHeader/>
      <RightHeader/>
    </div>
  );
}

export default NavBar;
