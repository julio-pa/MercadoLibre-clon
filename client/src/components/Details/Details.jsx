import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCallApi from '../../hooks/CallApi';
import NavBar from '../NavBar/NavBar';
import ContainerDetail from './ContainerDetail';


//TODO: Hacer responsive el proyecto
const Details = () => {

  const { product_id } = useParams();


  const url = `http://localhost:5005/api/details/${product_id}`;

  const { item, loading } = useCallApi(url)

  return (
    <div>
      <NavBar />
      {
        loading
          ? <div>Cargando</div>
          : <div className='bg-gray-200 px-12 py-20'>
            <ContainerDetail
              img={item.img}
              title={item.title}
              price={item.price} />
          </div>
      }
      <div>
        <p className='text-gray-400 mt-5 p-7 text-xs'>Copyright © 1999-2023 MercadoLibre Ecuador Cia. Ltda.</p>
      </div>
    </div>
  );
}

export default Details;
