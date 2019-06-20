import { REQUEST_USER_ACCOUNT_CREATION, USER_ALREADY_EXISTS } from '../../constants/action-types';
import axios from 'axios';
import { history } from "../history";

const URL = 'http://localhost:8080';

export function requestCreateUserAccount(name,password) {
    return dispatch => {
        axios.post(URL + '/create_user', {name, password})
            .then(res => {
                if (res.status === 201) {
                    dispatch(successfulCreate());
                    // history.push('/main');
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 500) {
                    dispatch(userExists());
                }
            })
    }
}

function userExists() {
    return { type: USER_ALREADY_EXISTS }
}

function successfulCreate() {
    return { type: REQUEST_USER_ACCOUNT_CREATION }
}