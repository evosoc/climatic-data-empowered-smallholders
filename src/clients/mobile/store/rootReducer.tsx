import {combineReducers} from "redux";
import {reducer as AuthReducer} from "./auth";
import {reducer as ProfileReducer} from './profile';
import {reducer as FarmReducer} from './farms';

const appReducer = combineReducers({
    FarmReducer,
    AuthReducer,
    ProfileReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
        state = undefined
    }
    return appReducer(state, action);
};

export default rootReducer;
