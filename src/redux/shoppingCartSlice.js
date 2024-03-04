import { createSlice } from '@reduxjs/toolkit';

const shoppingCartInitialState = {
  cart: [],
};
// [{... , quantity: 5}]
const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: shoppingCartInitialState,
  reducers: {
    addItemToCart(state, action) {
      const isProductInCart = state.cart.some(
        product => product.id === action.payload.id
      );
      if (isProductInCart) {
        state.cart = state.cart.map(product => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
    decreaseSingleItem(state, action) {
      const isLastItem = action.payload.quantity === 1;
      if (isLastItem) {
        // [{id: 1}, {id: 2}, {id: 3}]
        // {id: 3} - action.payload
        // [{id: 1}, {id: 2}]
        state.cart = state.cart.filter(
          product => product.id !== action.payload.id
        );
      } else {
        state.cart = state.cart.map(product => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
      }
    },
    removeItemFromCart(state, action) {
        state.cart = state.cart.filter(
          product => product.id !== action.payload.id
        );
    },
  },
});

export const { addItemToCart, decreaseSingleItem, removeItemFromCart } =
  shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;
