import React from 'react'
//import { BrowserRouter, Routes, Route, Switch } from "react-router-dom"
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { useCallback, useContext, useEffect, useState } from "react"
//import { UserContext } from "./context/UserContext"

import Login from "./Login"
import Register from "./Register"
import Home from "./Home"

function App() {

  //  // const [currentTab, setCurrentTab] = useState("login")
  //   const [userContext, setUserContext] = useContext(UserContext)

  //   //we use Usecallback to prevent this from being called again on refresh
  //   const verifyUser = useCallback(() => {
  //       fetch(process.env.REACT_APP_API_ENDPOINT + "users/refreshToken", {  //path for refreshing token !!! TODO: set this up
  //         method: "POST",
  //         credentials: "include",
  //         headers: { "Content-Type": "application/json" },
  //       }).then(async response => {
  //         if (response.ok) {
  //           const data = await response.json()
  //           setUserContext(oldValues => {
  //             return { ...oldValues, token: data.token }
  //           })
  //         } else {
  //           setUserContext(oldValues => {
  //             return { ...oldValues, token: null }
  //           })
  //         }
  //         // call refreshToken every 5 minutes to renew the authentication token.
  //         setTimeout(verifyUser, 5 * 60 * 1000)
  //       })
  //     }, [setUserContext])
    
  //   useEffect(() => {
  //       verifyUser()
  //     }, [verifyUser])


      console.log("Router is running")

  return (
   
    <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />

   </Routes>
  </BrowserRouter>
  ) //  <Route path="/" element={<Login />} />
}

export default App;
