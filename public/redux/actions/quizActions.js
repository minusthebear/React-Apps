import { SET_ALL_QUESTION_DATA } from '../../constants/action-types';
import axios from 'axios';

const URL = 'http://localhost:8080';

// This method GETS from the server and SETS on the front-end
export function getAllCategories() {
	return async function(dispatch) {
		let res = await axios.get(URL + '/getAllCategories');
		let data = res.data;
		dispatch({ type: SET_ALL_QUESTION_DATA, allQuestionData: data });
	};
}
