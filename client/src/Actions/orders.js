import axios from 'axios';

// Action Types
export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
export const FETCH_ORDER_DETAILS_SUCCESS = 'FETCH_ORDER_DETAILS_SUCCESS';

// Action Creators
export const fetchOrdersRequest = () => ({
  type: FETCH_ORDERS_REQUEST,
});

export const fetchOrdersSuccess = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders,
});

export const fetchOrdersFailure = error => ({
  type: FETCH_ORDERS_FAILURE,
  payload: error,
});

export const fetchOrderDetailsSuccess = (orderId, orderDetails) => ({
  type: FETCH_ORDER_DETAILS_SUCCESS,
  payload: { orderId, orderDetails },
});

// Thunk Actions
export const fetchOrders = () => {
  return async dispatch => {
    dispatch(fetchOrdersRequest());
    try {
      const response = await axios.get('http://localhost:2024/api/product/GetAllOrders');
      dispatch(fetchOrdersSuccess(response.data));
    } catch (error) {
      dispatch(fetchOrdersFailure(error.message));
    }
  };
};

export const fetchOrderDetails = orderId => {
  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:2024/api/product/GetOrderDetails/${orderId}`);
      dispatch(fetchOrderDetailsSuccess(orderId, response.data));
    } catch (error) {
      dispatch(fetchOrdersFailure(error.message));
    }
  };
};
