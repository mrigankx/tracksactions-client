import { AUTH, LOGOUT } from "../constants/index";

const authReducer = (state = { authdata: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data.body }));
            return { ...state, authdata: action?.data };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authdata: null }
        default:
            return state;
    }
}
export default authReducer;