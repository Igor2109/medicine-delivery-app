import styled from 'styled-components';

export const StyledShoppingCart = styled.form`
  display: grid;
  grid-template-areas:
    'left right'
    'bottom bottom';
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  .left {
    grid-area: left;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 15px;
    gap: 35px;
  }
  .cart-label {
    display: flex;
    flex-direction: column;
  }
  .label-txt {
  }
  .cart-input {
    border-radius: 6px;
    width: 240px;
  }
  .right {
    grid-area: right;
  }
  .cart-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .cart-list-item {
  }
  .item-img {
  }
  .item-details {
  }
  .product-name {
  }
  .product-price {
  }
  .item-count-wrapper {
  }
  .item-count {
  }
  .count-increase-btn {
  }
  .bottom {
    grid-area: bottom;
    display: flex;
    justify-content: end;
  }
`;
