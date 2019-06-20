import { REQUEST_AUTHENTICATE_USER, PROCESSING_AUTHENTICATE_USER } from '../../constants/action-types';

export function requestAuthenticateUser(username, password) {
    return { type: REQUEST_AUTHENTICATE_USER, username, password };
}

export function processAuthenticateUser(status, session) {
    return { type: PROCESSING_AUTHENTICATE_USER, session, authenticated: status};
}