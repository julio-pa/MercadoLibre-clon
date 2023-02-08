import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FilterCategory from '../components/Categorys/FilterCategory';
import Details from '../components/Details/Details';
import Layout from '../components/layouts/Layout';
import Products from '../components/Products/Products';
import routes from '../helpers/routes'

const AppRouter = () => {
  return (
    <Routes>
      <Route path= {routes.home} element={<Layout/>}
      />
      <Route path={routes.products}
        element={<Products/>}
      />
      <Route path={routes.details} element={<Details/>}/> 
      <Route path={routes.category} element={<FilterCategory/>}/>
    </Routes>
  );
}

export default AppRouter;
