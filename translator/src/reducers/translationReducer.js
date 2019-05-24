import { ADD_ARTICLE, ADD_TRANSLATE_ID } from "../constants/action-types";

const initialState = {
    articles: [],
    translateId: null
};

function translationReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    } else if (action.type === ADD_TRANSLATE_ID) {
        console.log('translationReducer');
        console.log(state);
        console.log(action);
        return Object.assign({}, state, {
            translateId: action.translateId
        });
    }
    return state;
}

export default translationReducer;