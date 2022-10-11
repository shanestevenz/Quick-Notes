import React, { useState } from "react";
import Proptypes from 'prop-types'


async function loginUser(credentials) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({setToken}){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <form>
            <label>
                Username
                <input type="text"></input>
            </label>
            <label>
                Password
                <input type="password"></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

Login.Proptypes = {
    setToken: Proptypes.func.isRequired
}