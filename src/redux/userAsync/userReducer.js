import {
  FETCH_USERS_ERROR,
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;