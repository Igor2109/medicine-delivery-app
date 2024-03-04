import React, { useMemo } from 'react';
import { StyledShoppingCart } from './ShoppingCart.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectShoppingCart } from '../../redux/shoppingCart.selectors';
import {
  addItemToCart,
  decreaseSingleItem,
  removeItemFromCart,
} from '../../redux/shoppingCartSlice';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import imgMedicine from 'assets/images/isometric-gastroenterology-composition-with-view-medication-with-tubes-pills-illustration_1284-63536.avif';
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectShoppingCart);
  const {
    values: { name, email, phone, address },
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    onSubmit: (values, { resetForm }) => {
      const formData = { ...values, cart };
      console.log(formData);
      toast.success('Your order was successfully created!');
      resetForm();
    },
  });

  const onIncreaseItem = product => {
    dispatch(addItemToCart(product));
  };
  const onDecreaseItem = product => {
    dispatch(decreaseSingleItem(product));
  };
  const onDeleteItem = product => {
    dispatch(removeItemFromCart(product));
  };

  const cartTotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <StyledShoppingCart onSubmit={handleSubmit}>
      <div className="left">
        <label className="cart-label">
          <span className="label-txt">Name</span>
          <input
            name="name"
            value={name}
            onChange={handleChange}
            type="text"
            className="cart-input"
          />
        </label>
        <label className="cart-label">
          <span className="label-txt">Email</span>
          <input
            name="email"
            value={email}
            onChange={handleChange}
            type="text"
            className="cart-input"
          />
        </label>
        <label className="cart-label">
          <span className="label-txt">Phone</span>
          <input
            name="phone"
            value={phone}
            onChange={handleChange}
            type="text"
            className="cart-input"
          />
        </label>
        <label className="cart-label">
          <span className="label-txt">Address</span>
          <input
            name="address"
            value={address}
            onChange={handleChange}
            type="text"
            className="cart-input"
          />
        </label>
      </div>
      <div className="right">
        <ul className="cart-list">
          {cart.length === 0 && <p>You haven't added any medicines yet.</p>}
          {cart.map(product => {
            return (
              <li key={product.id} className="cart-list-item">
                <img src={imgMedicine} alt="" className="item-img" width="100px" height="100px" />
                <div className="item-details">
                  <h3 className="product-name">{product.medicineTitle}</h3>
                  <button className='close-cart-btn' type="button" onClick={() => onDeleteItem(product)}>
                    &times;
                  </button>
                  <p className="product-price">Price:{product.price}</p>
                  <div className="item-count-wrapper">
                    <button
                      onClick={() => onDecreaseItem(product)}
                      className="count-increase-btn"
                      type="button"
                    >
                      -
                    </button>

                    <span className="item-count">{product.quantity}</span>
                    <button
                      onClick={() => onIncreaseItem(product)}
                      className="count-increase-btn"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom">
        <p className="total">Total price: {cartTotal}</p>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </StyledShoppingCart>
  );
};

export default ShoppingCart;
