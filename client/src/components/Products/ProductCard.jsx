import React, { useEffect, useState } from 'react';
import PaginatedItems from './Pagination';

const ProductCard = () => {

  const [products, setProducts] = useState([]);

  const GetProducts = () => {
    fetch('http://localhost:5005/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))

  }

  useEffect(() => {
    GetProducts()
  }, []);

  return (
    <div className='m-3 w-11/12'>
      <PaginatedItems data={products} />
    </div>
  );
}

export default ProductCard;
