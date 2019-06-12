import { combineReducers } from "redux";
import jeopardyReducer from './jeopardyReducer';
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
    jeopardyReducer,
    weatherReducer
});

export default rootReducer;
