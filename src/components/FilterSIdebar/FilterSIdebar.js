/** @format */

import React, { useState } from "react";
import "./FilterSidebar.css";
import { RiFilterFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { useFilter } from "../../Context/FilterContext";

const FilterSIdebar = () => {
  const [show, setShow] = useState(false);

  const { dispatch } = useFilter();

  return (
    <div className='filter-sidebar'>
      {show ? (
        <div className='filter-icon'>
          <ImCross onClick={() => setShow(false)} />
        </div>
      ) : (
        <div className='filter-icon'>
          <RiFilterFill onClick={() => setShow(true)} />
        </div>
      )}

      {show ? (
        <div className='ui-filter'>
          <div className='filter-div1'>
            <button
              className='address-modal-btn btn-clear'
              onClick={() => {
                dispatch({ type: "CLEAR_FILTER" });
              }}>
              Clear all filter
            </button>
          </div>

          <div>
            <div className='filter-div2 '>Sort By Price</div>
            <div className='filter-div2-content '>
              <div>
                <input
                  type='checkbox'
                  className='filter-div2-content1 '
                  onClick={() => {
                    dispatch({
                      type: "SORT_FILTER",
                      payload: { sort: "HIGH_TO_LOW" },
                    });
                    console.log("clicked");
                  }}
                />{" "}
                Low To High
              </div>
              <div>
                <input
                  type='checkbox'
                  className='filter-div2-content1 '
                  onClick={() => {
                    dispatch({
                      type: "SORT_FILTER",
                      payload: { sort: "LOW_TO_HIGH" },
                    });
                    console.log("clicked");
                  }}
                />{" "}
                High to Low
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterSIdebar;
