import {RESPONSE_AUTHENTICATE_USER, SET_USER_SESSION, UNSUCCESSFUL_LOGIN} from '../../constants/action-types';
import { history } from "../history";
import axios from 'axios';
import {setUserSession} from "./sessionActions";

const URL = 'http://localhost:8080';

export function loginUserAccount(name,password) {
    return dispatch => {
        axios.post(URL + '/authentication', {name, password})
            .then(res => {
                localStorage.setItem('MatthewHamannReactApp', JSON.stringify(res.data));
                dispatch(setUserSession(res.data));
                history.push('/');
            })
            .catch(err => {
                console.log(err);
                dispatch(errorAction());
            })
    }
}

export function errorAction() {
    return { type: UNSUCCESSFUL_LOGIN };
}