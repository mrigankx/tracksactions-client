import { FETCH_ALL, TOTAL } from "../constants/index";

const expenseReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, data: action?.data };
        case TOTAL:
            return { ...state, total: action?.data };
        default:
            return state;
    }
}
export default expenseReducer;