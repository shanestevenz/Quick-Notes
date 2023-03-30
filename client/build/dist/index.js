import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom/client.js";
import {Route} from "../_snowpack/pkg/react-router-dom.js";
import App from "./components/App.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Getting root div");
root.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null)));
