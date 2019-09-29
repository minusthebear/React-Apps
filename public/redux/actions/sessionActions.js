import {
    SET_USER_PROFILE,
    SET_AUTH_TOKEN,
    SET_AUTHENTICATED,
    SET_USER_SESSION,
    SET_USER_SETTINGS,
    SET_STATE
} from '../../constants/action-types';
import axios from "axios";
import {history} from "../history";
import {errorAction} from "./loginActions";
import cookie from 'react-cookies';

const URL = 'http://localhost:8080';
axios.defaults.withCredentials = true;

export function checkSession() {

    const cke = cookie.load('sid');

    if (!cke) {
        return { auth: false };
        // return dispatch({ type: SET_AUTHENTICATED, authenticated: false });
    }

    return axios.post(URL + '/session_check', {token: cke})
        .then(res => {
            if (res.data && res.data.token && res.data.profile && res.data.profile.userID) {
                return {auth: true, data: res.data};
            }
            cookie.remove('sid');
            return {auth: false};
        })
        .catch(err => {
            cookie.remove('sid');
            return {auth: false};
        })
}

export function setUserSession(user) {
    return { type: SET_USER_SESSION, user };
}
export function setAuthenticated(authenticated) {
    return { type: SET_AUTHENTICATED, authenticated };
}
export function setToken(token) {
    return { type: SET_AUTH_TOKEN, token };
}