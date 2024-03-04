import styled from 'styled-components';

export const StyledShoppingCart = styled.form`
  display: grid;
  grid-template-areas:
    'left right'
    'bottom bottom';
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    .left {
      margin-left: 0;
    }
  }

  .left {
    grid-area: left;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 15px 34px;
    gap: 35px;
    border: 2px solid black;
    margin-left: 15px;
    background-color: black;
    /* max-height: 425px; */
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .left {
      margin-left: 0;
      padding: 15px;
    }
  }

  .cart-label {
    display: flex;
    flex-direction: column;
  }
  .label-txt {
    color: white;
    margin-bottom: 8px;
  }
  .cart-input {
    border-radius: 10px;
    width: 340px;
    padding: 4px 8px;
    cursor: pointer;

    border: 2px solid rgb(246, 209, 134);
    border-radius: 15px;
    transition: all 250ms ease-in;

    &:hover,
    &:focus {
      background-color: white;
      color: black;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.4);
      transition: all 0.3s ease-in-out;
    }
  }
  .cart-input:is(:hover, :focus) {
    transform: scale(1.1);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .cart-input {
      width: 90vw;
    }
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    .cart-input {
      width: 460px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1350px) {
    .cart-input {
      width: 565px;
    }
  }

  @media (min-width: 1440px) {
    .cart-input {
      width: 660px;
    }
  }

  .right {
    grid-area: right;
    margin-right: 15px;
    border: 2px solid black;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .right {
      margin-right: 0;
    }
  }

  .cart-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-items: center;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 15px;
  }
  .cart-list-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    border: 2px solid black;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: white;
    max-width: 100px;
  }
  .item-img {
    max-width: 90px;
  }
  .item-details {
    padding-left: 6px;
  }
  .product-name {
  }
  .close-cart-btn {
    position: absolute;
    border: none;
    background-color: transparent;
    width: 15px;
    height: 15px;
    top: 6px;
    right: 6px;
    cursor: pointer;
  }
  .product-price {
    padding: 2px 0;
  }
  .item-count-wrapper {
    padding-bottom: 4px;
  }
  .item-count {
    padding: 0 4px;
  }
  .count-increase-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .bottom {
    grid-area: bottom;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 15px;
    gap: 10px;
  }
  .total {
    color: red;
    font-size: 26px;
  }
  .submit-btn {
    color: red;
    border: none;
    background-color: beige;
    padding: 8px 6px;
    border-radius: 10px;
    width: 120px;
    cursor: pointer;
    transition: all 250ms ease-in;
  }
  .submit-btn:hover {
    transform: scale(1.1);
    border-color: blanchedalmond;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 14px 38px,
      rgba(0, 0, 0, 0.22) 0px 10px 30px;
    transition: all 0.3s ease-in-out;
  }
`;
