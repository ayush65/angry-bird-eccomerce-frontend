/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [setToLogin] = useState(false);

  // const [arr, setArr] = useState(["ayush65"]);

  const [arr] = useState(JSON.parse(localStorage.getItem("UsersData") || "[]"));

  const LoginHandler = () => {
    if (username === "" || password === "") {
      return alert("Please enter Proper Details");
    }

    axios
      .get("https://angry-bird-eccomerce-backend-6e2m.vercel.app/api/v1/users")
      .then(function (response) {
        // const usersData = response.data;

        // usersData.map((item) => {
        //   console.log(item.name);

        //   arr.push(item.name);
        //   console.log(arr);
        // });

        arr.push(username);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (arr.includes(username)) {
      alert("Account Already exist");
    } else {
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
          if (!response.status) {
            alert("Error occured");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    const usersDataObj = JSON.stringify(arr);

    localStorage.setItem("UsersData", usersDataObj);

    arr.push("ayush65");
  }, [arr]);

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
