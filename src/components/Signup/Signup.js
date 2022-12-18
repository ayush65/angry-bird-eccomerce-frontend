/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [toLogin, setToLogin] = useState(false);

  const LoginHandler = () => {
    if (username === "" || password === "") {
      return alert("Please enter Proper Details");
    }
    axios
      .post(
        "https://angry-bird-eccomerce-backend-6e2m.vercel.app/api/v1/users",
        {
          name: username,
          password: password,
        }
      )
      .then(function (response) {
        console.log(response);

        if (response) {
          setToLogin(true);
          setPassword("");
          setUsername("");
          alert("Account made successfully");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='login-container'>
      <div className='signup-div-container'>
        <p>Signup for Angry Store</p>

        <input
          type='text'
          placeholder='Username'
          className='address-modal-input'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type='password'
          placeholder='Password'
          className='address-modal-input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='address-modal-btn btn-login' onClick={LoginHandler}>
          Signup
        </button>
      </div>
      <img
        src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/80ea4884295237.5fc281a103c84.gif'
        alt='signup-img'
        className='signup-img'
      />
    </div>
  );
};

export default Signup;
