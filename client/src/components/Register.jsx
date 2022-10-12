import React, { useState } from 'react';
import { Link } from "react-router-dom";

async function registerUser(credentials) {
  const bodyVal = new URLSearchParams()
  bodyVal.append('username',credentials.username)
  bodyVal.append('password',credentials.password)
  const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: bodyVal.toString(),
      headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    })
  return res
 }

export default function Register( ) { //add some kind of token
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault()
    const registerResponse = await registerUser({username: username, password: password})
    console.log(registerResponse)
    if (registerResponse.ok){
      console.log("Succesfully registered user")
    } else {
      console.log("Username exists")

    }
    
  }

  return(
    <div className="login-wrapper">
      <h1>Please Register</h1>
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
      <Link to="/login">Login Instead</Link>
    </div>
  )
}
