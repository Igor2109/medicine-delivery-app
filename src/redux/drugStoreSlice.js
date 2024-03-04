import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

const INSTANCE = axios.create({baseURL:"https://653bb37ad5d6790f5ec7493c.mockapi.io"})

export const fetchDrugStores = createAsyncThunk(
  'drugstores/fetchAll',
  async (_, thunkAPI) => {
    try {
        const {data} = await INSTANCE.get("/drugstore");
        //   console.log('contacts: ', contacts);
        return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMedicines = createAsyncThunk(
  'drugstore/fetchMedicines',
  async (drugStoreName, thunkAPI) => {
    try {
        const {data} = await INSTANCE.get("/medicines");
        return data.filter(item => item.pharmacy === drugStoreName);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const INITIAL_STATE = {
  drugStores: [],
  medicines: [],

  isLoadingDrugStores: false,
  isLoadingMedicines: false,
  selectedDrugStore: null,
  error: null,
};



const drugStoresSlice = createSlice({
  name: 'drugStores',
  initialState: INITIAL_STATE,
  reducers: {

    selectDrugStore(state, action) {
state.selectedDrugStore = action.payload;
    }},
  extraReducers: builder =>
    builder
      // ========================== FETCH drugS =====================

      .addCase(fetchDrugStores.fulfilled, (state, action) => {
        state.isLoadingDrugStores = false;
        state.drugStores = action.payload;
      })
      .addCase(fetchDrugStores.pending, (state) => {
        state.isLoadingDrugStores = true;
        state.error = null;
      })

      // ================= Get medicines ====================

      .addCase(fetchMedicines.fulfilled, (state, action) => {
        state.isLoadingMedicines = false;
        state.medicines = action.payload;
      })
      .addCase(fetchMedicines.pending, (state) => {
        state.isLoadingMedicines = true;
        state.error = null;
      })

      .addMatcher(
        isAnyOf(fetchDrugStores.rejected, fetchMedicines.rejected),
        (state, action) => {
          state.isLoadingDrugStores = false;
          state.isLoadingMedicines = false;
          state.error = action.payload;
        }
      ),
});

export const drugStoresReducer = drugStoresSlice.reducer;

export const {selectDrugStore} = drugStoresSlice.actions;