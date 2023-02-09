import React from 'react';
import { filtros } from '../../mock/mockData';
import FiltroCard from './FiltroCard';

const Filtros = () => {
  return (
    <div className='m-3 w-3/12 max-sm:hidden'>
      {
        filtros.map(({ title, items }, index) => (
          <FiltroCard
            key={index}
            title={title}
            items={items}
          />
        ))
      }


    </div>
  );
}

export default Filtros;
