import React, { useState } from "react";
import "./Login.css";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function Verification(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("Login button clicked");
    if (username === "admin" && password === "admin") {
      return alert("Login successful!"), (window.location.href = "/home");
    }
  }
  function SignUp(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("Sign Up button clicked");
    return (window.location.href = "./Signup");
  }
  return (
    <div className="LoginInput">
      <h1>Login</h1>
      <form className="LogForm">
        <input
          className="LogInput"
          type="text"
          placeholder="Username"
          name="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="LogInput"
          type="password"
          placeholder="Password"
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="LogInput" type="submit" onClick={Verification}>
          Login
        </button>
      </form>
      <div>
        <button className="logo" onClick={SignUp}>
          Don't have an account?
        </button>
      </div>
    </div>
  );
}
export default Login;
