import { combineReducers } from 'redux';
import ordersReducer from './orders';
import usersReducer from './users';
import productsReducer from './products';
const rootReducer = combineReducers({
  orders: ordersReducer,
  users: usersReducer,
  products: productsReducer
});

export default rootReducer;
