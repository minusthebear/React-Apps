import { SET_USER_PROFILE, SET_AUTHENTICATED, SET_USER_SESSION, SET_USER_SETTINGS } from '../../constants/action-types';
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
        return dispatch({ type: SET_AUTHENTICATED, authenticated: false });
    }

    return dispatch => {
        axios.post(URL + '/session_check', {token: cke})
            .then(res => {
                console.log('/session_check');
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                dispatch(errorAction());
            })
    }
}

export function setUserSession(user) {
    console.log(user);
    return { type: SET_USER_SESSION, user };
}
export function setAuthenticated(authenticated) {
    console.log(user);
    return { type: SET_AUTHENTICATED, authenticated };
}