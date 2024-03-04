import { HOME_ROUTE, SHOPPING_CART_ROUTE } from 'constants/routes';
import HomePage from 'pages/HomePage/HomePage';
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { useEffect } from 'react';
import { fetchDrugStores } from '../redux/drugStoreSlice';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchDrugStores());
    }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={SHOPPING_CART_ROUTE} element={<ShoppingCart />} />
        </Routes>
      </main>
   </>
  );
};
