import cookie from 'react-cookies';

export default function textUpdatesMiddleware () {
    return store => next => action => {
        const { dispatch, getState } = store;
        const sid = cookie.load('sid');

        console.log('getState\n', getState());

        console.log('textUpdatesMiddleware\n');

        console.log('store:\n', store);

        console.log('action:\n', action);

        next(action);
    }
}