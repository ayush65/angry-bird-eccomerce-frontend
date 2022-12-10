/** @format */

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import SideBar from "../SideBar/SideBar";

import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className='navbar'>
      <div className='navbar-hamburger'>
        {" "}
        {show ? (
          <ImCross onClick={() => setShow(false)} />
        ) : (
          <GiHamburgerMenu onClick={() => setShow(true)} />
        )}
      </div>

      {show ? <SideBar /> : null}

      <h1 className='navbar-logo'>
        Angry Bird Store{" "}
        <img
          src='data:image/png;base64,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'
          alt=''
          className='nav-image-logo'
        />
      </h1>
      <div className='nav-links-container'>
        <p className='nav-links'>Home</p>
        <p className='nav-links'>Products</p>
        <p className='nav-links'>Wishlist</p>
        <p className='nav-links'>Cart</p>
      </div>
      <div className='nav-buttons'>
        <button className='login-button'>Login</button>
        <button className='signin-button'>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;