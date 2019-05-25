import { ADD_LOCATION } from '../constants/action-types';
import { getProjectJSON } from '../api/translateApi';


export function addLocation(location) {
    return { type: ADD_LOCATION, location }
};


export function setTranslateId() {
    // return function(dispatch) {
    //     return getProjectJSON().then(res => {
    //         dispatch(addTranslateId(res[0].project_id));
    //     });
    // }
}