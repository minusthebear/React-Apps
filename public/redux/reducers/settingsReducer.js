import { SET_USER_SESSION } from "../../constants/action-types";

const initialState = {

};

export default function sessionReducer(state = initialState, action) {
    // if (action.type === SET_USER_SESSION) {
    //     let obj = Object.assign({}, state, {
    //         user: action.user
    //     });
    //     return obj;
    // }
    return state;
}
