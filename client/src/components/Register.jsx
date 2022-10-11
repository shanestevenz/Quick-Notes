import React, { useState } from 'react';


export default function Register( ) { //add some kind of token
  

  return(
    <div className="login-wrapper">
      <h1>Please Register</h1>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
