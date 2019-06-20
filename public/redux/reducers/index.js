import { combineReducers } from "redux";
import jeopardyReducer from './jeopardyReducer';
import weatherReducer from "./weatherReducer";
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
    jeopardyReducer,
    weatherReducer,
    signupReducer
});

export default rootReducer;
