import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE} from '../Actions/users';

const initialState = {
  loading: false,
  users: [],
  error: ''
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      };
      case DELETE_USER_REQUEST:
      return { ...state, loading: true };
    case DELETE_USER_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        users: state.users.filter(user => user._id !== action.payload),
        error: '' 
      };
    case DELETE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
