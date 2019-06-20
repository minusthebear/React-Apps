import { combineReducers } from "redux";
import jeopardyReducer from './jeopardyReducer';
import weatherReducer from "./weatherReducer";
import signupReducer from './signupReducer';
import loginReducer from "./loginReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
    jeopardyReducer,
    weatherReducer,
    signupReducer,
    loginReducer,
    sessionReducer
});

export default rootReducer;
