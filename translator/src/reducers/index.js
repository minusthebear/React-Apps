import { ADD_ARTICLE, ADD_TRANSLATE_ID } from "../constants/action-types";

const initialState = {
    articles: [],
    translateId: null
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
           articles: state.articles.concat(action.payload)
        });
    } else if (action.type === ADD_TRANSLATE_ID) {
        return Object.assign({}, state, {
            articles: state.translateId
        });
    }
    return state;
}

export default rootReducer;