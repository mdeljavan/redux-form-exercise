import React from "react";
import ReactDom from "react-dom";
import { combineReducers, Store, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import { App } from "./App";
import { Provider } from "react-redux";
const rootReducer = combineReducers({
  form: formReducer
});
const store: Store = createStore(rootReducer);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
