import axios from "axios";
import { toast } from "react-toastify";
import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";
import setAuthToken from "./../../helpers/setAuthToken";
import { showError } from "./../../helpers/functions";

const API_URL = process.env.REACT_APP_API_URL;

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch({
      type: GET_USER_INFO,
    });
    const res = await axios.get(`${API_URL}/api/user/me/`);

    dispatch({
      type: GET_USER_INFO_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_INFO_ERROR,
    });
    localStorage.removeItem("token");
  }
};

// Login User
export const login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_USER,
    });

    const res = await axios.post(`${API_URL}/api/user/token/`, data);
    localStorage.setItem("token", res.data.token);
    await dispatch(loadUser());
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data,
    });
    toast.success("You have logined successfully");
  } catch (err) {
    showError(err);

    dispatch({
      type: LOGIN_USER_ERROR,
    });
    localStorage.removeItem("token");
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  localStorage.removeItem("token");
};
