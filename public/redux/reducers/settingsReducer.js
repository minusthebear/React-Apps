import { GET_USER_INFO,GET_USER_SETTINGS } from "../../constants/action-types";

const initialState = {

};

export default function sessionReducer(state = initialState, action) {
    if (action.type === GET_USER_INFO) {
        let obj = Object.assign({}, state, {
            user: action.user
        });
        return obj;
    }if (action.type === GET_USER_SETTINGS) {
        let obj = Object.assign({}, state, {
            user: action.user
        });
        return obj;
    }
    return state;
}
