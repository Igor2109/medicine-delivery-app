import React, { useEffect } from 'react';
import { StyledHomePage } from './HomePage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDrugStores,
  selectIsLoadingDrugStores,
  selectIsLoadingMedicines,
  selectMedicines,
  selectSelectedDrugStore,
} from '../../redux/drugStoresSlice.selectors';
import { fetchMedicines, selectDrugStore } from '../../redux/drugStoreSlice';
import { addItemToCart } from '../../redux/shoppingCartSlice';
import { toast } from 'react-toastify';

const HomePage = () => {
  const dispatch = useDispatch();
  const drugStores = useSelector(selectDrugStores);
  const medicines = useSelector(selectMedicines);
  const isLoadingDrugStores = useSelector(selectIsLoadingDrugStores);
  const isLoadingMedicines = useSelector(selectIsLoadingMedicines);
  const selectedDrugStore = useSelector(selectSelectedDrugStore);

  useEffect(() => {
    if (!selectedDrugStore) return;
    dispatch(fetchMedicines(selectedDrugStore));
  }, [dispatch, selectedDrugStore]);

  const onSelectStore = storeName => {
    dispatch(selectDrugStore(storeName));
  };

    const onIncreaseItem = product => {
      dispatch(addItemToCart(product));
      toast.success(`${product.medicineTitle} was added to the cart!`);
    };


  return (
    <StyledHomePage>
      <div className="left">
        <h2 className="left-title">Shops:</h2>
        {isLoadingDrugStores && <p>Loadings...</p>}

        <ul className="shops-list">
          {drugStores.map(store => (
            <li key={store.id} className="shops-list-item">
              <button
                onClick={() => onSelectStore(store.companyName)}
                className="list-item-btn"
              >
                {store.companyName}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        {isLoadingMedicines && <p>Loadings...</p>}
        {medicines.length === 0 && !isLoadingMedicines && (
          <p className='empty-cart' >You need to select Pharmacy Shop</p>
        )}
        <ul className="medicines-list">
          {medicines.map(medicine => (
            <li key={medicine.id} className="medicine-list-item">
              <h3 className='medicine-title'>{medicine.medicineTitle}</h3>
              <p className="product-price">Price:{medicine.price}</p>

              <button
                onClick={() => onIncreaseItem(medicine)}
                className="add-to-cart-btn"
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
