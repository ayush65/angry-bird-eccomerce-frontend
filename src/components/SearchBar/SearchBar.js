/** @format */

import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <input
        type='text'
        className='sidebar_input '
        placeholder='Search Favorite Charecter'
        onChange={(e) => console.log(e.target.value)}
      />
      <button className='searchbar-button'>Search</button>
    </div>
  );
};

export default SearchBar;
