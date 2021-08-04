import { AUTH, LOGOUT } from "../constants/index";
import * as api from "../api/index.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    const res = await dispatch({ type: AUTH, data });
    if (res.data.status === "ok") {
      toast.success("Logged in successfully", { position: toast.POSITION.TOP_CENTER });
      history.push("/dashboard");
    }
    else {
      toast.warn(res.data.msg, { position: toast.POSITION.TOP_CENTER });
      history.push("/login");
    }

  } catch (error) {
    console.log(error);
    toast.warn("Invalid Credentials", { position: toast.POSITION.TOP_CENTER });
  }
};
export const signup = (formData, history) => async (dispatch) => {
  console.log("data is: " + formData);
  try {
    const { data } = await api.signUp(formData);

    const res = await dispatch({ type: AUTH, data });
    if (res.data.status === "ok") {
      toast.success("Registered successfully", { position: toast.POSITION.TOP_CENTER });
      history.push("/dashboard");
    }
    else {
      toast.warn(res.data.msg, { position: toast.POSITION.TOP_CENTER });
    }

  } catch (error) {
    console.log(error);
    toast.warn("Registration Failed", { position: toast.POSITION.TOP_CENTER });
  }
};



export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
}