import React, { useState } from 'react';


export default function Home( ) { //add some kind of token
  

  return(
    <div className="login-wrapper">
      <h1>THIS IS THE HOME</h1>
      <form >
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}
