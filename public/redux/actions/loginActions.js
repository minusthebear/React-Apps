import {RESPONSE_AUTHENTICATE_USER, SET_USER_SESSION, SET_STATE, UNSUCCESSFUL_LOGIN} from '../../constants/action-types';
import { history } from "../history";
import axios from 'axios';
import cookie from 'react-cookies';
import {setUserSession, setAuthenticated} from "./sessionActions";

const URL = 'http://localhost:8080';

export function loginUserAccount(name,password) {
    return dispatch => {
        axios.post(URL + '/authentication', {name, password})
            .then(res => {
                console.log(res.data);
                if (!res.data || !res.data.token) {
                    throw new Error();
                }
                console.log('FINISHED LOGIN USER ACCOUNT');
                cookie.save('sid', res.data.token, { path: '/', maxAge: 60 * 20});

                //localStorage.setItem('MatthewHamannReactApp', JSON.stringify(res.data));
                //dispatch(setUserSession(res.data));
                dispatch(loginSuccessful(res.data));
                history.push('/');
            })
            .catch(err => {
                console.log(err);
                dispatch(errorAction());
            })
    }
}

export function loginSuccessful(data) {
    return { type: SET_STATE, data};
}

export function errorAction() {
    return { type: UNSUCCESSFUL_LOGIN };
}