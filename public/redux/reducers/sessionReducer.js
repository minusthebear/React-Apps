import {
    SET_AUTHENTICATED,
    SET_STATE,
    SET_USER_PROFILE,
    SET_USER_SESSION,
    SET_USER_SETTINGS,
    SET_AUTH_TOKEN
} from "../../constants/action-types";

const initialState = {
    user: null,
    token: null,
    authenticated: false
};

export default function sessionReducer(state = initialState, action) {
    console.log(action);
    if (action.type === SET_STATE) {
        console.log('step one');
        if (action.data.token && action.data.profile && action.data.profile.userID) {
            console.log('it is here');
            console.log(action.data.profile.userID);
            console.log(action.data.token);
            console.log(state);
            return Object.assign({}, state, {
                user: action.data.profile.userID,
                token: action.data.token,
                authenticated: true
            });
        }
        return state;
    }

    if (action.type === SET_AUTHENTICATED) {
        return Object.assign({}, state, {
            authenticated: action.auth
        })
    }
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
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            token: action.token
        });
    }
    return state;
}
