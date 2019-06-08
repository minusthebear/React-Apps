import { ADD_LOCATION } from '../constants/action-types';
import { getProjectJSON } from '../api/weatherApi';


export function addLocation(location) {
    return { type: ADD_LOCATION, location }
};

export function addArticle(article) {
    return { type: 'ADD_ARTICLE', article}
};


export function setTranslateId() {
    // return function(dispatch) {
    //     return getProjectJSON().then(res => {
    //         dispatch(addTranslateId(res[0].project_id));
    //     });
    // }
}
