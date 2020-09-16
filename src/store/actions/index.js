import axios from 'axios';
import { toast } from 'react-toastify';

export const LOADING = 'LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginUser = ({ username, password }, history) => async (
  dispatch
) => {
  try {
    dispatch({ type: LOADING });
    const url = 'http://localhost:5000/api/login';
    const body = { username, password };
    const headers = { 'Content-Type': 'application/json' };
    const response = await axios.post(url, body, { headers });
    const { payload } = response.data;
    localStorage.setItem('redux-auth-friends-token', payload);
    dispatch({ type: LOGIN_SUCCESS, payload });
    history.push('/friends');
  } catch (error) {
    let errorMsg = error.message;
    if (error.response) {
      console.log(error.response.data);
      const { data } = error.response;
      errorMsg = data.error;
      // dispatch({ type: LOGIN_FAILED, payload: data.error });
    }
    toast.error(errorMsg);
    dispatch({ type: LOGIN_FAILED, payload: errorMsg });
  }
};
