import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { loadLocalStorage } from "./localStorage/localStorage";
import thunk from "redux-thunk";
import reducers from "./reducers";

import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const userFromStorage = loadLocalStorage("user");
const user = userFromStorage ? userFromStorage : null;

const store = createStore(
  reducers,
  { user },
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
