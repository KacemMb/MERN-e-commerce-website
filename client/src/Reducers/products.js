import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from '../Actions/products';

const initialState = {
  loading: false,
  products: [],
  error: ''
};

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: ''
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload
      };
      case DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case DELETE_PRODUCT_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        products: state.products.filter(product => product._id !== action.payload),
        error: '' 
      };
    case DELETE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
