import { SET_ALL_CATEGORIES } from "../../constants/action-types";

const initialState = {
	categories: {}
};

function translationReducer(state = initialState, action) {
	if (action.type === SET_ALL_CATEGORIES) {
		return Object.assign({}, state, {
			categories: action.categories
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
