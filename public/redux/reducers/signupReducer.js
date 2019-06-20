import { REQUEST_USER_ACCOUNT_CREATION, USER_ALREADY_EXISTS } from "../../constants/action-types";
import axios from 'axios';

const initialState = {
    userExists: false,
    successfulCreate: false
};

function signupReducer(state = initialState, action) {
    if (action.type === USER_ALREADY_EXISTS) {
        return Object.assign({}, state, {
            userExists: true
        })
    }
    if (action.type === REQUEST_USER_ACCOUNT_CREATION) {
        return Object.assign({}, state, {
            successfulCreate: true, userExists: false
        })
    }
    return state;
}

export default signupReducer;
