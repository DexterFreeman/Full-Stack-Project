import React from "react";
import "./Home.scss";
const Home = () => {
  console.log("THIS WORKED");
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
        <button>Log In</button>
      </form>
    </>
  );
};

export default Home;
