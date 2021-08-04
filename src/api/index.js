import axios from "axios";

const API = axios.create({ baseURL: "https://tracksactions-server.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token
      }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/signin", formData);
export const signUp = (formData) => API.post("/signup", formData);
export const signupwithgoogle = (formData) => API.post("/signupwithgoogle", formData);

export const dashboard = (user) => API.post("/dashboard", user);
export const getExpense = (user) => API.post("/expenses/getexpense", user);
export const addExpense = (data) => API.post("/expenses/createexpense", data);
export const getmaxbalance = (data) => API.post("/expenses/getmaxbalance", data);
export const updateBalance = (data) => API.post("/expenses/updatebalance", data);
export const deleteexpense = (data) => API.post("/expenses/deleteexpense", data);


