import React, {useState} from "../../_snowpack/pkg/react.js";
import {Link, useNavigate} from "../../_snowpack/pkg/react-router-dom.js";
async function registerUser(credentials) {
  const bodyVal = new URLSearchParams();
  bodyVal.append("username", credentials.username);
  bodyVal.append("password", credentials.password);
  const res = await fetch("/register", {
    method: "POST",
    body: bodyVal.toString(),
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
  });
  return res;
}
export default function Register() {
  const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerResponse = await registerUser({
      username,
      password
    });
    console.log(registerResponse);
    if (registerResponse.ok) {
      navigate("/", {replace: true});
      console.log("Succesfully registered user.");
    } else if (registerResponse.status === 401) {
      console.log("Username exists.");
    } else {
      console.log("Some server error while registering user.");
    }
  };
  function authenticateWithGithub(e) {
    e.preventDefault();
    window.open("https://quick-notes.glitch.me/auth/github", "_self");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-stone-900 text-white text-opacity-80 flex justify-center items-center h-screen w-screen "
  }, /* @__PURE__ */ React.createElement("form", {
    className: "min-w-[20%]",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("div", {
    className: "login-wrapper m-auto flex flex-col  rounded-lg bg-zinc-800 px-16 py-16 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-5 font-bold text-3xl"
  }, "Register for", /* @__PURE__ */ React.createElement("p", {
    className: "text-emerald-700"
  }, "Quick Notes"))), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-md text-slate-300 dark:text-white font-normal"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    className: "mb-5 p-2 bg-inherit border border-b rounded-lg focus-visible:border-transparent",
    type: "text",
    placeholder: "Enter Username",
    onChange: (e) => setUserName(e.target.value)
  }), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 text-md text-slate-300 dark:text-white font-normal"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    className: "mb-5 p-2 bg-inherit border border-blue-gray-700 rounded-lg focus-visible:border-transparent",
    type: "password",
    placeholder: "Password",
    onChange: (e) => setPassword(e.target.value)
  }), /* @__PURE__ */ React.createElement("button", {
    className: "py-2 mb-3  text-md bg-transparent hover:bg-emerald-500 border border-emerald-500 hover:border-transparent text-white font-normal rounded",
    type: "submit"
  }, "Register"), /* @__PURE__ */ React.createElement("a", {
    className: "text-center text-md button py-2 bg-transparent hover:bg-gray-400 text-white border border-gray-400 hover:border-transparent hover:text-black font-semibold rounded",
    href: "/auth/github",
    onClick: (e) => authenticateWithGithub(e)
  }, "Sign in with GitHub"), /* @__PURE__ */ React.createElement("p", {
    className: "text-grey-700 text-md mt-4 text-center"
  }, "or"), /* @__PURE__ */ React.createElement(Link, {
    className: "text-center mx-auto  text-md text-opacity-70 hover:text-opacity-90 text-emerald-500 font-light underline hover:decoration-wavy decoration-emerald-500 hover:underline-offset-4 w-16",
    to: "/"
  }, "Sign in"))));
}
