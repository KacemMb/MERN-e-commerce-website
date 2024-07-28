import axios from 'axios';

// Action Types
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Action Creators
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error
});

// Thunk Actions
export const fetchUsers = () => {
  return async dispatch => {
    dispatch(fetchUsersRequest());
    try{
      const response = await axios.get('http://localhost:2024/api/user/getall');
       dispatch(fetchUsersSuccess(response.data));
      }catch(error) {
        dispatch(fetchUsersFailure(error.message));
      };
  };
};
