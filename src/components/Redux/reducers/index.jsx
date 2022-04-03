import { combineReducers } from "redux";
import { userReducer } from "../reducers/reducer";

// Combine all reducers
const rootReducer = combineReducers({
    userReducer
});

export default rootReducer;