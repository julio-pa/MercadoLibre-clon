import React, { useEffect, useState } from 'react';
import useCallApi from '../../hooks/CallApi';
import PaginatedItems from './Pagination';

const ProductCard = () => {

  const url = 'http://localhost:5005/api/products';
  const { item, loading } = useCallApi(url)

  if (loading) {
    return (
      <div className='flex'>
        <h2 className='text-2xl text-blue-600'>Cargando...</h2>
      </div>
    )
  } else {
    return (
      <div className='m-3 w-11/12'>
        <PaginatedItems data={item} />
      </div>
    )
  }
}

export default ProductCard;
