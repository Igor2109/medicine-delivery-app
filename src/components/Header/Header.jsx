import { HOME_ROUTE, SHOPPING_CART_ROUTE } from 'constants/routes';
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to={HOME_ROUTE}>Shop</NavLink>
      <NavLink to={SHOPPING_CART_ROUTE}>Shopping Cart</NavLink>
    </header>
  );
};

export default Header;
