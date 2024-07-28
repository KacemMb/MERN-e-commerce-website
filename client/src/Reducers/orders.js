import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE,FETCH_ORDER_DETAILS_SUCCESS } from '../Actions/orders';

const initialState = {
  loading: false,
  orders: [],
  error: '',
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: '',
      };
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        orders: [],
        error: action.payload,
      };
    case FETCH_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state.orders.map(order =>
          order._id === action.payload.orderId
            ? { ...order, ...action.payload.orderDetails }
            : order
        ),
        error: '',
      };
    default:
      return state;
  }
};

export default ordersReducer;
