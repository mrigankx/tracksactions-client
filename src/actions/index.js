import { TOTAL } from "../constants/index";
export const setTotalInStore = (data) => async (dispatch) => {
    await dispatch({ type: TOTAL, data });
};