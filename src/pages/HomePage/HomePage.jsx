import React from 'react';
import { StyledHomePage } from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="left">
        <h2 className="left-title">Shops</h2>
        <ul className="shops-list">
          <li className="shops-list-item">
            <button className="list-item-btn">PillCare Solutions</button>
          </li>
          <li className="shops-list-item">
            <button className="list-item-btn">PillCare Solutions</button>
          </li>
          <li className="shops-list-item">
            <button className="list-item-btn">PillCare Solutions</button>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="medicines-list">
          <li className="medicine-list-item">
            <h3>Aspirin</h3>
            <button className="add-to-cart-btn">Add</button>
          </li>
          <li className="medicine-list-item">
            <h3>Aspirin</h3>
            <button className="add-to-cart-btn">Add</button>
          </li>
          <li className="medicine-list-item">
            <h3>Aspirin</h3>
            <button className="add-to-cart-btn">Add</button>
          </li>
          <li className="medicine-list-item">
            <h3>Aspirin</h3>
            <button className="add-to-cart-btn">Add</button>
          </li>
          <li className="medicine-list-item">
            <h3>Aspirin</h3>
            <button className="add-to-cart-btn">Add</button>
          </li>
          <li className="medicine-list-item">
            <h3>Aspirin</h3>
            <button className="add-to-cart-btn">Add</button>
          </li>
        </ul>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
