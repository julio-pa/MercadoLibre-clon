import React, { useEffect, useState } from 'react';
import ElementCard from './ElementCard';

const ProductCard = () => {

  const [products, setProducts] = useState([]);

  const GetProducts = () => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    // console.log(products)

  }

  useEffect(() => {
    GetProducts()
  }, []);
//TODO: Hacer la paginació por cada pagina hay 50 productos
  return (
    <div className='bg-white m-3 w-10/12 rounded-md p-5'>
      {
        products?.map((item) => (
          <>
            <ElementCard
              key={item.id}
              img={item.images[0]}
              product={item.title}
              price={item.price}
            />
            <hr />
          </>
        ))
      }
    </div>
  );
}

export default ProductCard;
