import React from "../../_snowpack/pkg/react.js";
import {BrowserRouter, Route, Routes, useNavigate} from "../../_snowpack/pkg/react-router-dom.js";
import {useCallback, useContext, useEffect, useState} from "../../_snowpack/pkg/react.js";
import Login from "./Login.js";
import Register from "./Register.js";
import Home from "./Home.js";
import ProtectedRoute from "./ProtectedRoute.js";
function App() {
  useEffect(() => {
    console.log("In use effect of <App/>");
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    if (hasCode) {
      sessionStorage.setItem("loggedIn", "true");
      window.open("https://quick-notes.glitch.me/", "_self");
    }
  }, []);
  console.log("In <App/>");
  return /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/login",
    exact: true,
    element: /* @__PURE__ */ React.createElement(Login, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/register",
    element: /* @__PURE__ */ React.createElement(Register, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    exact: true,
    element: /* @__PURE__ */ React.createElement(ProtectedRoute, null, /* @__PURE__ */ React.createElement(Home, null))
  })));
}
export default App;
