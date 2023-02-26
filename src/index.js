import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import App from "./App";
// Tạo ra một Redux store chứa reducer tổng
const store = createStore(reducer);

render(
  //  Provider sử dụng để cung cấp store cho toàn bộ ứng dụng
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
