import { RESPONSE_AUTHENTICATE_USER, UNSUCCESSFUL_LOGIN } from '../../constants/action-types';
import { history } from "../history";
import axios from 'axios';

const URL = 'http://localhost:8080';

export function loginUserAccount(name,password) {
    return dispatch => {
        axios.post(URL + '/authentication', {name, password})
            .then(res => {
                dispatch(successfulLogin(res.data));
                history.push('/main');
            })
            .catch(err => {
                console.log(err);
                dispatch(errorAction());
            })
    }
}



export function successfulLogin(data) {
    return { type: RESPONSE_AUTHENTICATE_USER, data };
}

export function errorAction() {
    return { type: UNSUCCESSFUL_LOGIN };
}