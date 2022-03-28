import axios from "axios";

import {
  FETCH_USERS_ERROR,
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS
} from "./userTypes";

export const fetchUsersLoading = () => {
  return {
    type: FETCH_USERS_LOADING
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};
export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersLoading);
    axios
      .get("https://jsonplacehoder.com")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersError(errorMsg));
      });
  };
};
