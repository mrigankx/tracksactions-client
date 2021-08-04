import { FETCH_ALL } from "../constants/index";

const expenseReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, data: action?.data };
        // case LOGOUT:
        //     localStorage.clear();
        //     return { ...state, authdata: null }
        default:
            return state;
    }
}
export default expenseReducer;