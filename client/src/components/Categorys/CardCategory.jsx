import React from 'react';
import NavBar from '../NavBar/NavBar';
import Filtros from '../Products/Filtros';
import ProductHeader from '../Products/ProductHeader';
import PaginatedItems from '../Products/Pagination';

const CardCategory = ({data, category}) => {
  return (
    <div className='bg-gray-200 min-h-screen'>
      <NavBar />
      <ProductHeader categoryName={category} />
      <div className='flex justify-between'>
        <Filtros />
        <div className='m-3 w-11/12'>
          <PaginatedItems data={data}/>
        </div>
      </div>
      <div className='bg-white'>
        <p className='text-gray-400 mt-5 p-7 text-xs'>Copyright © 1999-2023 MercadoLibre Ecuador Cia. Ltda.</p>
      </div>
    </div>
  );
}

export default CardCategory;
