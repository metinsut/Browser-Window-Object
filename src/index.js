import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducer/index";
import "./assets/styles/main.css";
import App from "./App";

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const AppClient = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

let store = createStore(reducers, applyMiddleware(...middleware));


ReactDOM.render(
    <Provider store={store}>
        <AppClient/>
    </Provider>,
    document.getElementById("root")
);
