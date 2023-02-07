import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ContainerDetail from './ContainerDetail';

const Details = () => {

  const { product_id } = useParams();
  const [productDetail, setProductDetail] = useState({});

  const loadProductDetails = () => {
    fetch(`http://localhost:5005/api/details/${product_id}`)
      .then(res => res.json())
      .then(data => setProductDetail(data))
  }

  useEffect(() => {
    loadProductDetails()

  }, []);

  return (
    <div>
      <NavBar />
      <div className='bg-gray-200 p-5'>
        <ContainerDetail
        img={productDetail.img}
        title={productDetail.title}
        price={productDetail.price} />
      </div>
    </div>
  );
}

export default Details;
