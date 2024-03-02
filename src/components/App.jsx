import { HOME_ROUTE, SHOPPING_CART_ROUTE } from 'constants/routes';
import HomePage from 'pages/HomePage/HomePage';
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={SHOPPING_CART_ROUTE} element={<ShoppingCart />} />
        </Routes>
      </main>
    </div>
  );
};
