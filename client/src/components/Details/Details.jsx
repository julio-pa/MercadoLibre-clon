import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
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
      <div className='bg-gray-200 px-12 py-20'>
        <ContainerDetail
          img={productDetail.img}
          title={productDetail.title}
          price={productDetail.price} />
      </div>
      <div>
        <p className='text-gray-400 mt-5 p-7 text-xs'>Copyright © 1999-2023 MercadoLibre Ecuador Cia. Ltda.</p>
      </div>
    </div>
  );
}

export default Details;
