import cookie from 'react-cookies';
import {SET_USER_SESSION} from "./constants/action-types";

export default function textUpdatesMiddleware () {
    return store => next => action => {
        const { dispatch, getState } = store;
        const sid = cookie.load('sid');

        if (sid) {
            return;
        }

        next(action);
    }
}