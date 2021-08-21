import React from "react";
import ReactDOM from "react-dom";
import {
    Provider
} from "react-redux";

import { SpeechProvider } from "@speechly/react-client";
import store from "./store";
import "./index.css";
import App from "./components/App/App";


ReactDOM.render(
    <SpeechProvider appId="eb3c5e7a-6034-4a49-aba1-5b9f77e46851" language="en-US">
        <Provider store={store}>
            < App />
        </Provider>
    </SpeechProvider>
    , document.getElementById("root"));