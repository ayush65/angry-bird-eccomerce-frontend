/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Homepage from "../components/Homepage";

function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path='/cart' element={<Cart />}></Route>
        <Route exact path='/' element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default RoutesPath;
