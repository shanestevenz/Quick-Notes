import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

async function loginUser(credentials) {
  const bodyVal = new URLSearchParams()
  bodyVal.append('username',credentials.username)
  bodyVal.append('password',credentials.password)
  const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: bodyVal.toString(),
      headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    })
  return res
 }

//  const navigateToRegister = () => {
//   // 👇️ navigate to /contacts
//   navigate('/register');
// };

export default function Login( ) { //add some kind of token
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault()
    const loginResponse = await loginUser({username: username, password: password})
    console.log(loginResponse)
    if (loginResponse.ok){
      console.log("User entered correct credentials")
    } else {
      console.log("User entered incorrect credentials")

    }
    
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
          
        </div>
      </form>
      <button href="http://localhost:3000/auth/github">Sign in with GitHub</button>
      <Link to="/register">Register Instead</Link>
    </div>
  )
}
