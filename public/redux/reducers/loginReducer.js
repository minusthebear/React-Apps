import { REQUEST_AUTHENTICATE_USER, PROCESSING_AUTHENTICATE_USER } from "../../constants/action-types";

const initialState = {
};

function loginReducer(state = initialState, action) {
    if (action.type === REQUEST_AUTHENTICATE_USER) {
        return Object.assign({}, state, {
            categories: action.categories
        });
    }
    if (action.type === PROCESSING_AUTHENTICATE_USER) {
        return Object.assign({}, state, {
            allQuestionData: action.allQuestionData
        });
    }
    return state;
}

export default loginReducer;
