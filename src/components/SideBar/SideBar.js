/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className='sidebar'>
      <Link to='/' className='sidebar-element'>
        Product
      </Link>
      <Link to='/wishlist' className='sidebar-element'>
        Wishlist
      </Link>
      <Link to='/cart' className='sidebar-element'>
        Cart
      </Link>
      <Link to='/account' className='sidebar-element'>
        {" "}
        Account
      </Link>
    </div>
  );
};

export default SideBar;
