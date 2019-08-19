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

    console.log('at beginning of checkSession');
    const cke = cookie.load('sid');

    if (!cke) {
        console.log('NO TOKEN!!!');
        return { auth: false };
        // return dispatch({ type: SET_AUTHENTICATED, authenticated: false });
    }

    return axios.post(URL + '/session_check', {token: cke})
        .then(res => {
            console.log(res.data);
            console.log('/session_check');
            if (res.data && res.data.token && res.data.profile && res.data.profile.userID) {
                return {auth: true, data: res.data};
            }
            cookie.remove('sid');
            return {auth: false};
        })
        .catch(err => {
            console.log(err);
            cookie.remove('sid');
            return {auth: false};
        })
}

export function setUserSession(user) {
    console.log(user);
    return { type: SET_USER_SESSION, user };
}
export function setAuthenticated(authenticated) {
    console.log(user);
    return { type: SET_AUTHENTICATED, authenticated };
}
export function setToken(token) {
    return { type: SET_AUTH_TOKEN, token };
}