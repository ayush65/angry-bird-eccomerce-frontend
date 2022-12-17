/** @format */

import React from "react";
import AddressManagement from "../AdressManagement/AddressManagement";
import "./PlaceOrder.css";
import PriceDetailsCard from "./PriceDetailsCard";

const PlaceOrder = () => {
  return (
    <div className='place-order'>
      <AddressManagement />
      <PriceDetailsCard />
    </div>
  );
};

export default PlaceOrder;
