import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import { store } from "./redux/reduxStore";

import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
