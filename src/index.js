import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { store } from "./redux/reduxStore";

let rerenderEntireTree = state => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
