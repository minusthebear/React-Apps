import { SET_USER_PROFILE, SET_AUTHENTICATED, SET_USER_SESSION, SET_USER_SETTINGS } from '../../constants/action-types';

export function setUserSession(user) {
    console.log(user);
    return { type: SET_USER_SESSION, user };
}
export function setAuthenticated(authenticated) {
    console.log(user);
    return { type: SET_AUTHENTICATED, authenticated };
}