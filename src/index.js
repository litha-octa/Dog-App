import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import Main from "./Main";
// import reduxStore from "./redux/store";



ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={reduxStore}> */}
      <Main />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
