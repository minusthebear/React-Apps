import { SET_ALL_QUESTION_DATA } from '../../constants/action-types';
import axios from 'axios';

const URL = 'http://localhost:8080';

// This method GETS from the server and SETS on the front-end
export function getAllCategories() {
	axios.defaults.withCredentials = true;
	return async function(dispatch) {
		let res = await axios.get(URL + '/getAllCategories');
		let data = res.data;

		if (!data._primary_category_) {
			throw new Error('There is no primary category field');
		}

		let primaryCategories = data._primary_category_;
		delete data._primary_category_;

		dispatch({
			type: SET_ALL_QUESTION_DATA,
			allQuestionData: {
				data: data,
				primaryCategories: primaryCategories
			}
		});
	};
}
