import React, { useEffect, useState } from 'react';
import useCallApi from '../../hooks/CallApi';
import PaginatedItems from './Pagination';

const ProductCard = () => {

  const url = 'http://localhost:5005/api/products';
  const { item, loading } = useCallApi(url)

  if (loading) {
    return (
      <div className='flex'>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">s
        </svg>
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
