import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching orders
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await axios.get('http://localhost:2024/api/product/GetAllOrders');
  return response.data;
});

// Async thunk for fetching order details
export const fetchOrderDetails = createAsyncThunk('orders/fetchOrderDetails', async (orderId) => {
  const response = await axios.get(`http://localhost:2024/api/product/GetOrderDetails/${orderId}`);
  return response.data;
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    loading: false,
    orders: [],
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.error = '';
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.orders = [];
        state.error = action.error.message;
      })
      .addCase(fetchOrderDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        const orderIndex = state.orders.findIndex(order => order._id === action.payload._id);
        if (orderIndex !== -1) {
          state.orders[orderIndex] = action.payload;
        }
        state.error = '';
      })
      .addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default ordersSlice.reducer;
