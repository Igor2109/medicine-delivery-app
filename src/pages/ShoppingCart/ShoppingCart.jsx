import React from 'react';
import { StyledShoppingCart } from './ShoppingCart.styled';

const ShoppingCart = () => {
  return (
    <StyledShoppingCart>
      <div className="left">
        <label className="cart-label">
          <span className="label-txt">Name</span>
          <input type="text" className="cart-input" />
        </label>
        <label className="cart-label">
          <span className="label-txt">Email</span>
          <input type="text" className="cart-input" />
        </label>
        <label className="cart-label">
          <span className="label-txt">Phone</span>
          <input type="text" className="cart-input" />
        </label>
        <label className="cart-label">
          <span className="label-txt">Address</span>
          <input type="text" className="cart-input" />
        </label>
      </div>
      <div className="right">
        <ul className="cart-list">
          <li className="cart-list-item">
            <img src="" alt="" className="item-img" />
            <div className="item-details">
              <h3 className="product-name">Paracetamol</h3>
              <p className="product-price">Price:500</p>
              <div className="item-count-wrapper">
                <span className="item-count">500</span>
                <button className="count-increase-btn" type="button">
                  -
                </button>
                <button className="count-increase-btn" type="button">
                  +
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p className="total">Total price:1000</p>
        <button className="submit-btn">Submit</button>
      </div>
    </StyledShoppingCart>
  );
};

export default ShoppingCart;
