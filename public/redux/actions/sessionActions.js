import { SET_USER_SESSION } from '../../constants/action-types';

export function setUserSession(user) {
    console.log(user);
    return dispatch => dispatch(userSesh(user));
}

function userSesh(user) {
    console.log(user);
    return { type: SET_USER_SESSION, user };
}