import { SET_STATE, USER_ALREADY_EXISTS} from '../../constants/action-types';
import axios from 'axios';
import { history } from "../history";
import cookie from "react-cookies";

const URL = 'http://localhost:8080';

export function requestCreateUserAccount(name,password) {
    // axios.defaults.withCredentials = true;
    return dispatch => {
        axios.post(URL + '/create_user', {name, password})
            .then(res => {
                if (res.status === 201) {
                    cookie.save('sid', res.data.token, { path: '/', maxAge: 60 * 20});
                    dispatch(successfulCreate(res.data));
                    history.push('/');
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
    return { type: USER_ALREADY_EXISTS };
}

function successfulCreate(data) {
    return { type: SET_STATE, data};;
}
