/** @format */

import React, { useEffect, useState } from "react";
import "./Login.css";
import { HiKey } from "react-icons/hi";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginState, setLoginState] = useState(
    JSON.parse(localStorage.getItem("LoginState") || true)
  );

  const LoginHandler = () => {
    axios
      .post(
        "https://angry-bird-eccomerce-backend-6e2m.vercel.app/api/v1/users/login",
        {
          name: username,
          password: password,
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data === "Success") {
          setLoginState(false);
          console.log(loginState);
          const user = JSON.stringify(username);

          localStorage.setItem("username", user);
          window.location.reload(false);
        } else {
          alert("please provide Correct username and password");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const LoginState = JSON.stringify(loginState);

    localStorage.setItem("LoginState", LoginState);
  }, [loginState]);

  if (!loginState) {
    return <Navigate replace to='/' />;
  }

  return (
    <div className='login-container'>
      <img
        src='https://i.pinimg.com/originals/1b/08/27/1b0827116ad952c99d8f43c1ba68ac88.gif'
        alt=''
        className='login-img'
      />
      <div className='login-div'>
        <div className='login-header-content'>
          <p>Login To the Angry Store</p>
        </div>
        <div className='login-input-container'>
          <input
            type='text'
            placeholder='Username'
            className='address-modal-input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <div className='login-key'>
            <HiKey
              onClick={() => {
                setUsername("ayush65");
                setPassword("ayush65");
              }}
            />
          </div>
        </div>
        <div className='login-input-container'>
          <input
            type='password'
            placeholder='Password'
            className='address-modal-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='login-key'>
            <HiKey
              onClick={() => {
                setUsername("ayush65");
                setPassword("ayush65");
              }}
            />
          </div>
        </div>
        <button className='address-modal-btn btn-login' onClick={LoginHandler}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
