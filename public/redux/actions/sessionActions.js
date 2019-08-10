import { SET_USER_PROFILE, SET_USER_SESSION, SET_USER_SETTINGS } from '../../constants/action-types';

export function setUserSession(user) {
    console.log(user);
    return { type: SET_USER_SESSION, user };
}