/** @format */

import React from "react";
import { useFilter } from "../../Context/FilterContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { dispatch } = useFilter();

  return (
    <div className='SearchBar'>
      <input
        type='text'
        className='sidebar_input '
        placeholder='Search Favorite Charecter'
        onChange={(e) => {
          dispatch({
            type: "FETCH_SEARCH_NAME",
            payload: e.target.value,
          });
          console.log("clicked");
        }}
      />
      <button className='searchbar-button'>Search</button>
    </div>
  );
};

export default SearchBar;
