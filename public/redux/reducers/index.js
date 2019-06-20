import { combineReducers } from "redux";
import jeopardyReducer from './jeopardyReducer';
import weatherReducer from "./weatherReducer";
import signupReducer from './signupReducer';
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
    jeopardyReducer,
    weatherReducer,
    signupReducer,
    loginReducer
});

export default rootReducer;
