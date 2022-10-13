import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "redux";
import App from "./App"
import "./App.css";
import reducers from "./reducers";

ReactDOM.render(
    <Provider
        store={configureStore(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById("root")
);