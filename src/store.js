import {
    createStore,
    applyMiddleware
} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/index";

const middleware = [
    thunk,
];
// const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

export default store;
