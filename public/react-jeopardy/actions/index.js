import { SET_ALL_CATEGORIES } from '../../constants/action-types';
import axios from 'axios';

const URL = 'http://localhost:8080';

export function setAllCategories(categories) {
	return { type: SET_ALL_CATEGORIES, categories }
};


// This method GETS from the server and SETS on the front-end
export function getAllCategories() {
	return function(dispatch) {
		return axios.get(URL + '/getAllCategories')
			// .then(response => response.json())
			.then(res => {
				console.dir(res);
				// dispatch({ type: SET_ALL_CATEGORIES, json });
			});
	};
}
