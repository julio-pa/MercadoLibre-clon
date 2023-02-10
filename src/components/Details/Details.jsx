import React from 'react';
import { useParams } from 'react-router-dom';
import useCallApi from '../../hooks/CallApi';
import NavBar from '../NavBar/NavBar';
import ContainerDetail from './ContainerDetail';


//TODO: Hacer responsive el proyecto
const Details = () => {

  const { product_id } = useParams();


  const url = `https://jp-api-mercado-libre-clon.onrender.com/api/details/${product_id}`;

  const { item, loading } = useCallApi(url)

  return (
    <div>
      <NavBar />
      {
        loading
          ? <div className='flex justify-center items-center h-screen'>
            <span className="material-symbols-outlined animate-spin text-9xl text-blue-600">
              clock_loader_80
            </span>
          </div>
          : <div className='bg-gray-200 px-12 py-20 max-sm:px-2'>
            <ContainerDetail
              img={item.img}
              title={item.title}
              price={item.price} />
          </div>
      }
      <div>
        <p className='text-gray-400 mt-5 p-7 text-xs'>Copyright © 1999-2023 JP-Mercado-Libre-Clon</p>
      </div>
    </div>
  );
}

export default Details;
