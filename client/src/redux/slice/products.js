import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../pages/api/axios';

export const addProducts = createAsyncThunk('add/products', async (params) => {
  const { data } = await axios.post('/products', params);

  return data;
});

export const removeProducts = createAsyncThunk('remove/products', async (id) => {
  const { data } = await axios.delete(`/products/${id}`);

  return data;
});

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
  const { data } = await axios.get('/products');

  return data;
});

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(removeProducts.fulfilled, (state, action) => {
        state.products = state.products.filter((el) => el._id !== action.payload);
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      });
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const productsReducer = productsSlice.reducer;
