import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('http://localhost:2024/api/product/GetAllProducts');
  return response.data;
});

// Async thunk for deleting a product
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await axios.delete(`http://localhost:2024/api/product/deleteProduct/${id}`);
  return id;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    products: [],
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = '';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((product) => product._id !== action.payload);
        state.error = '';
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default productsSlice.reducer;
