/** @format */

import React from "react";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-element'></div>
      <div className='sidebar-element'>Product</div>
      <div className='sidebar-element'>Wishlist</div>
      <div className='sidebar-element'>Cart</div>
      <div className='sidebar-element'> Order</div>
      <div className='sidebar-element'> Account</div>
    </div>
  );
};

export default SideBar;
