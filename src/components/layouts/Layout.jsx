import React, { } from 'react';
import Banner from '../Banner/Banner';

import Categorys from '../Categorys/Categorys';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Payment from '../PaymentMethods/Payment';


const Layout = ({children}) => {
  return (
    <>
      <NavBar />
        <Banner />
        <div className='bg-gray-200 p-7 pb-14'>
          <Payment />
          <Categorys />
        </div>
        <Footer />
        {children}
    </>
  );
}

export default Layout;
