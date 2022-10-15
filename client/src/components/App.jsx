import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          exact
          element={<ProtectedRoute>{<Home />}</ProtectedRoute>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
