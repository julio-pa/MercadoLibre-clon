import React from 'react';
import NavBar from '../NavBar/NavBar';
import Filtros from './Filtros';
import ProductCard from './ProductCard';
import ProductHeader from './ProductHeader';

const Products = () => {
  return (
    <div className='bg-gray-200 min-h-screen'>
      <NavBar />
      <ProductHeader />
      <div className='flex justify-between'>
        <Filtros />
        <ProductCard />
      </div>
      <div className='bg-white'>
        <p className='text-gray-400 mt-5 p-7 text-xs'>Copyright © 1999-2023 JP-Mercado-Libre-Clon</p>
      </div>
    </div>
  )
}

export default Products;
