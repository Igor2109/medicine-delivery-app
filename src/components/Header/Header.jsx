import { HOME_ROUTE, SHOPPING_CART_ROUTE } from 'constants/routes';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <NavLink class="header-link link" to={HOME_ROUTE}>
        Shop
      </NavLink>
      <NavLink class="header-link link" to={SHOPPING_CART_ROUTE}>
        Shopping Cart
      </NavLink>
    </StyledHeader>
  );
};

export default Header;
