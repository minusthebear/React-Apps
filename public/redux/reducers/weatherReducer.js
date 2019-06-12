import { ADD_LOCATION } from "../../constants/action-types";

const initialState = {
    locations: []
};

function weatherReducer(state = initialState, action) {
    if (action.type === ADD_LOCATION) {
        return Object.assign({}, state, {
            locations: state.locations.concat(action.location)
        });
    }
    return state;
}

export default weatherReducer;
