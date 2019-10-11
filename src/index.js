import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { store } from "./redux/reduxStore";

let rerenderEntireTree = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};
rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});
