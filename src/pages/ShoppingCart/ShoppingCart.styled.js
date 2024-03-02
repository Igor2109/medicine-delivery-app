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
  }
  .cart-label {
  }
  .label-txt {
  }
  .cart-input {
  }
  .right {
    grid-area: right;
  }
  .cart-list {
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
