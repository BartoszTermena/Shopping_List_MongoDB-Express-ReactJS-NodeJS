import { AUTH_ERROR, 
    USER_LOADING, 
    USER_LOADED, 
    LOGIN_SUCCESS,
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, 
    REGISTER_FAIL } from './types';
import { returnErrors, clearErrors } from './errorActions'
import axios from 'axios';

export const loadUser = () => (dispatch, getState) => {
    dispatch({
        type: USER_LOADING
    });
   
    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};
export const tokenConfig = (getState) => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    if(token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}