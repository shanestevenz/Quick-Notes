import {Navigate} from "../../_snowpack/pkg/react-router-dom.js";
import React, {useLayoutEffect} from "../../_snowpack/pkg/react.js";
import {useNavigate} from "../../_snowpack/pkg/react-router-dom.js";
const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  const loggedInStatus = JSON.parse(sessionStorage.getItem("loggedIn"));
  if (!loggedInStatus) {
    console.log("Auth status false, rendering <Login>");
    return /* @__PURE__ */ React.createElement(Navigate, {
      to: "/login",
      replace: true
    });
  } else {
    console.log("Auth status true, rendering <Home>");
    return children;
  }
};
export default ProtectedRoute;
