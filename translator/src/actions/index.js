import { ADD_ARTICLE, ADD_TRANSLATE_ID } from '../constants/action-types';
import { getTranslation } from '../api/translateApi';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function addTranslateId(translateId) {
    return { type: ADD_TRANSLATE_ID, translateId: translateId }
};


export function setTranslateId() {
    return function(dispatch) {
        return getTranslation().then(res => {
            dispatch(addTranslateId(res[0].project_id));
        });
    }
}

/*

export function loadCourses() {
    return function(dispatch) {
        dispatch(beginApiCall());
        return courseApi
            .getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseOptimistic(course) {
    return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

export function saveCourse(course) {
    //eslint-disable-next-line no-unused-vars
    return function(dispatch, getState) {
        dispatch(beginApiCall());
        return courseApi
            .saveCourse(course)
            .then(savedCourse => {
                course.id
                    ? dispatch(updateCourseSuccess(savedCourse))
                    : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

export function deleteCourse(course) {
    //eslint-disable-next-line no-unused-vars
    return function(dispatch) {
        dispatch(deleteCourseOptimistic(course));
        return courseApi.deleteCourse(course.id);
    };
}
*/

