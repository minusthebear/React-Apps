import { UNSUCCESSFUL_LOGIN, RESPONSE_AUTHENTICATE_USER } from "../../constants/action-types";

const initialState = {
    data: null,
    loginWarning: null
};

function loginReducer(state = initialState, action) {
    if (action.type === RESPONSE_AUTHENTICATE_USER) {
        return Object.assign({}, state, {
            data: action.data
        })
    }
    if (action.type === UNSUCCESSFUL_LOGIN) {
        console.log('loginReducer');
        return Object.assign({}, state, {
            loginWarning: 'Warning'
        });
    }
    return state;
}

export default loginReducer;
