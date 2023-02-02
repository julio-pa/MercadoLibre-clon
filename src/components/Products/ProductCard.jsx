import React, { useEffect, useState } from 'react';
import ElementCard from './ElementCard';
import PaginatedItems from './Pagination';

const ProductCard = () => {

  const [products, setProducts] = useState([]);

  const GetProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    console.log(products)

  }

  useEffect(() => {
    GetProducts()
  }, []);
  //TODO: Hacer la paginació por cada pagina hay 50 productos
  return (
    <div className='m-3 w-11/12 '>
      <PaginatedItems data={products} />
    </div>
  );
}

export default ProductCard;
