import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../login.css";

async function loginUser(credentials) {
  const bodyVal = new URLSearchParams();
  bodyVal.append("username", credentials.username);
  bodyVal.append("password", credentials.password);
  const res = await fetch("/login", {
    method: "POST",
    body: bodyVal.toString(),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  return res;
}

export default function Login() {
  //add some kind of token
  const navigate = useNavigate();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginResponse = await loginUser({
      username: username,
      password: password,
    });
    if (loginResponse.ok) {
      // Server said correct creds
      sessionStorage.setItem("loggedIn", "true");
      navigate("/", { replace: true });
      console.log("User entered correct credentials");
    } else {
      console.log("User entered incorrect credentials");
    }
  };
  return (
    <div className="bg-gray-900 text-white text-opacity-80 flex justify-center items-center h-screen w-screen">
      <form className="min-w-[20%]" onSubmit={handleSubmit}>
        <div className="login-wrapper m-auto flex flex-col  border rounded-lg p-5 bg-slate-800 border-yellow-600">
          <p className="my-3 mb-5 font-bold text-3xl">Sign in</p>
          <p className="mb-2 text-sm text-slate-300 dark:text-white font-normal">
            Username
          </p>

          <input
            className="mb-5 p-2 bg-inherit border border-yellow-600 rounded-lg focus-visible:border-blue-900"
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
          />

          <p className="mb-2 text-sm text-slate-300 dark:text-white font-normal">
            Password
          </p>
          <input
            className="mb-5 p-2 bg-inherit border border-yellow-600 rounded-lg focus-visible:border-blue-900"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="py-2 mb-3 bg-transparent hover:bg-yellow-600 border  border-yellow-600 hover:border-transparent text-white font-normal rounded"
            type="submit"
          >
            Submit
          </button>
          <button
            className="text-center button py-2 bg-slate-200 hover:bg-yellow-600 hover:text-white border border-black hover:border-transparent text-black font-semibold rounded"
            href="http://localhost:3000/auth/github"
          >
            Sign in with GitHub
          </button>
          <p className="text-grey-700 mt-4 text-center">or</p>

          <Link
            className="text-center mx-auto text-opacity-70 hover:text-opacity-90 text-yellow-500 font-light underline hover:decoration-wavy decoration-yellow-500 hover:underline-offset-4 w-16"
            to="/register"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
