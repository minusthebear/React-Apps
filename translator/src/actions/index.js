import { ADD_ARTICLE, ADD_TRANSLATE_ID } from '../constants/action-types';
import { getProjectJSON } from '../api/translateApi';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function addTranslateId(translateId) {
    return { type: ADD_TRANSLATE_ID, translateId }
};


export function setTranslateId() {
    return function(dispatch) {
        return getProjectJSON().then(res => {
            dispatch(addTranslateId(res[0].project_id));
        });
    }
}