import axios from 'axios';

// Action Types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';


export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';


// Action Creators
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error
});

// Thunk Actions
export const fetchProducts = () => {
  return async dispatch => {
    dispatch(fetchProductsRequest());
    try {
      const response = await axios.get('http://localhost:2024/api/product/GetAllProducts');
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    await axios.delete(`http://localhost:2024/api/product/DeleteProduct/${id}`);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};

