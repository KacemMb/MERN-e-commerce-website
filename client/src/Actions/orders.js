import axios from 'axios';

export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';

export const fetchOrdersRequest = () => ({
  type: FETCH_ORDERS_REQUEST
});

export const fetchOrdersSuccess = (orders) => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders
});

export const fetchOrdersFailure = (error) => ({
  type: FETCH_ORDERS_FAILURE,
  payload: error
});

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersRequest());
    axios.get('http://localhost:2024/api/product/GetAllOrders')
      .then(response => {
        dispatch(fetchOrdersSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchOrdersFailure(error.message));
      });
  };
};
