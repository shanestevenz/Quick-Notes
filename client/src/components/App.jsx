import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
//import useToken from './useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  console.log("TOken = " + token)
  if(!token) {
    return (
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Login  setToken={setToken} />}></Route>
    </Routes>
  </BrowserRouter>
    )
  }

    

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  ); //  <Route path="/" element={<Login />} />
}

export default App;
