import { ADD_LOCATION } from "../../constants/action-types";

const initialState = {
    locations: []
};

function translationReducer(state = initialState, action) {
    if (action.type === ADD_LOCATION) {
        return Object.assign({}, state, {
            locations: state.locations.concat(action.location)
        });
    // } else if (action.type === ADD_TRANSLATE_ID) {
        // console.log('translationReducer');
        // console.log(state);
        // console.log(action);
        // return Object.assign({}, state, {
        //     translateId: action.translateId
        // });
    }
    return state;
}

export default translationReducer;
