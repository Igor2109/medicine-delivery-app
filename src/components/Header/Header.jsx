import { HOME_ROUTE, SHOPPING_CART_ROUTE } from 'constants/routes';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <NavLink className="header-link " to={HOME_ROUTE}>
        Shop
      </NavLink>
      <NavLink className="header-link " to={SHOPPING_CART_ROUTE}>
        Shopping Cart
      </NavLink>
    </StyledHeader>
  );
};

export default Header;
