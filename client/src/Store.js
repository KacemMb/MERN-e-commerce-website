import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slices/ProductsSlice';
import ordersReducer from './Slices/OrdersSlice';
import usersReducer from './Slices/UsersSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersReducer,
    users: usersReducer
  }
});

export default store;