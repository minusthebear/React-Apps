import { SET_ALL_CATEGORIES } from '../../constants/action-types';

export function setAllCategories(categories) {
	return { type: SET_ALL_CATEGORIES, categories }
};
