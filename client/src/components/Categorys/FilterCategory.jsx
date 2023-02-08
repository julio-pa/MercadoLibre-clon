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
      <div>Loading...</div>
    )
  } else {
    return (
      <div>
        {item &&
          <CardCategory data={item} category={category}/>
        }
      </div>
    )
  }
}

export default FilterCategory;
