import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  let navigate = useNavigate(); 

  const handleClick = (e) => {
    e.preventDefault(); 
    console.log("TEST")
    navigate("/home")
  }
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h1> Login Here </h1>
        <label for="username"> Username </label>
        <input type="text" placeholder="Email or phone" id="username"></input>
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>
        <button onClick={handleClick}>Log In</button>
      </form>
    </>
  );
};

export default Login;
