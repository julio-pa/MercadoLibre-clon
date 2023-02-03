import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      <h1>Details🍰 del producto {productDetail?.title}</h1>
    </div>
  );
}

export default Details;
