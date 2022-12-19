/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Homepage from "../components/Homepage";
import Login from "../components/Login/Login";
import Logout from "../components/Logout/Logout";
import PlaceOrder from "../components/PlaceOrder/PlaceOrder";
import Signup from "../components/Signup/Signup";
import Wishlist from "../components/Wishlist/Wishlist";

function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/placeorder' element={<PlaceOrder />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route exact path='/' element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default RoutesPath;
