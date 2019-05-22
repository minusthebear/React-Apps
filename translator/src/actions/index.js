import { ADD_ARTICLE, ADD_TRANSLATE_ID } from '../constants/action-types';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function addTranslateId(payload) {
    return { type: ADD_TRANSLATE_ID, payload }
};