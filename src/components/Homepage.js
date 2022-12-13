/** @format */

import React from "react";
import Card from "./Cards/Card";
import FilterSIdebar from "./FilterSIdebar/FilterSIdebar";
import SearchBar from "./SearchBar/SearchBar";

const Homepage = () => {
  return (
    <div>
      {" "}
      <SearchBar />
      <Card />
      <FilterSIdebar />
    </div>
  );
};

export default Homepage;
