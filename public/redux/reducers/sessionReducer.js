import { SET_USER_SESSION } from "../../constants/action-types";

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
    return state;
}
