import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

const checkAuthenticationStatus = () => {
  const isAuth = fetch("http://localhost:3000/auth/status", {
    method: "GET",
  }).then((response) => {
    response.json().then((json) => json.isAuth);
  });
  return isAuth;
};

function App() {
  console.log("Router is running");

  const authStatus = checkAuthenticationStatus();
  authStatus.then((isAuth) => {
    if (!isAuth) {
      console.log("User is not authenticated, rendering login");
      return <Login />;
    } else {
      // the main page
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  ); //  <Route path="/" element={<Login />} />
}

export default App;
