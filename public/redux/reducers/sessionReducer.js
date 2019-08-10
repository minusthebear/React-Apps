import { SET_USER_PROFILE, SET_USER_SESSION, SET_USER_SETTINGS } from "../../constants/action-types";

const initialState = {
    user: null
};

export default function sessionReducer(state = initialState, action) {
    console.log(action);
    if (action.type === SET_USER_SESSION) {
        let obj = Object.assign({}, state, {
            user: action.user
        });
        console.log(obj);
        return obj;
    }
    if (action.type === SET_USER_PROFILE) {
        return Object.assign({}, state, {
            profile: action.profile
        });
    }
    if (action.type === SET_USER_SETTINGS) {
        return Object.assign({}, state, {
            profile: action.profile
        });
    }
    return state;
}
