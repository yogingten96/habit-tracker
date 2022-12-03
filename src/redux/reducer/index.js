import { combineReducers } from "redux";
import { habitReducer } from "./habitReducer";

const reducers = combineReducers({
    allHabits:habitReducer
})
export default reducers