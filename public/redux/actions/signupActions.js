import { REQUEST_USER_ACCOUNT_CREATION } from '../../constants/action-types';

export function requestCreateUserAccount(username,password) {
    return { type:REQUEST_USER_ACCOUNT_CREATION, username, password };
}