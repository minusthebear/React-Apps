import { SET_ALL_CATEGORIES, SET_ALL_QUESTION_DATA } from "../../constants/action-types";

const initialState = {
	categories: null,
	allQuestionData: null
};

function jeopardyReducer(state = initialState, action) {
	if (action.type === SET_ALL_CATEGORIES) {
		return Object.assign({}, state, {
			categories: action.categories
		});
	}
	if (action.type === SET_ALL_QUESTION_DATA) {
		return Object.assign({}, state, {
			allQuestionData: action.allQuestionData
		});
	}
	return state;
}

export default jeopardyReducer;
