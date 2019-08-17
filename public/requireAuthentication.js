import cookie from 'react-cookies';
import {SET_USER_SESSION} from "./constants/action-types";

export default function textUpdatesMiddleware () {
    return store => next => action => {
        const { dispatch, getState } = store;
        const sid = cookie.load('sid');

        if (sid) {
            return;
        }

        console.log('getState\n', getState());

        console.log('textUpdatesMiddleware\n');

        console.log('store:\n', store);

        console.log('action:\n', action);

        next(action);
    }
}