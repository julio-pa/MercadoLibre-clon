import React from 'react';
import { useParams } from 'react-router-dom';
import useCallApi from '../../hooks/CallApi';
import NavBar from '../NavBar/NavBar';
import CardCategory from './CardCategory';


const FilterCategory = () => {

  const { category } = useParams();

  const url = `https://jp-api-mercado-libre-clon.onrender.com/api/products/${category}`;

  const { item, loading } = useCallApi(url);
  if (loading) {
    return (
      <>
        <NavBar />
        <div className='flex justify-center items-center h-screen'>
          <span className="material-symbols-outlined animate-spin text-9xl text-blue-600">
            clock_loader_80
          </span>
        </div>
      </>
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
