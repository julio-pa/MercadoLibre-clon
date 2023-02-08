import React from 'react';
import { useParams } from 'react-router-dom';
import useCallApi from '../../hooks/CallApi';
import CardCategory from './CardCategory';


const FilterCategory = () => {

  const { category } = useParams();

  const url = `http://localhost:5005/api/products/${category}`;

  const { item, loading } = useCallApi(url);
  if (loading) {
    return (
      <div className='flex justify-center items-center'>
          <h2 className='text-2xl text-blue-600 mt-10'>Cargando...</h2>
      </div>
    )
  } else {
    return (
      <div>
        {item &&
          <CardCategory data={item} category={category} />
        }
      </div>
    )
  }
}

export default FilterCategory;
