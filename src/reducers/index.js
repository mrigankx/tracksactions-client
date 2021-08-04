// import changeNumber from "./increamentDecreament";
import { combineReducers } from "redux";
import auth from "./auth";
import expense from "./expense";
export const rootReducer = combineReducers({
    // changeNumber,
    // reducer2
    auth,
    expense
});

export default rootReducer;