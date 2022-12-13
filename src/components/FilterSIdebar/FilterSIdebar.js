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
              onClick={() => {
                dispatch({ type: "CLEAR_FILTER" });
              }}>
              Clear all filter
            </button>
          </div>
          {/* <div className='filter-div1'>
            <p>Range Filter</p>

            <input
              type='range'
              min='500'
              max='4000'
              value={price}
              className='range-filter'
              onChange={(e) => {
                setValue(e.target.value);
                dispatch({
                  type: "RANGE_FILTER",
                  payload: { maxPrice: e.target.value },
                });
              }}
            />
            // </div> */}
          {/* <div>{value}</div> */}
          <div>
            <div className='filter-div2 '>Sort By Price</div>
            <div className='filter-div2-content '>
              <div>
                <input
                  type='radio'
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
                  type='radio'
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

          {/* <div className='filter-div2 '>Sort By Category</div>
          <div className='filter-div2-content '>
            <div>
              <input type='checkbox' className='filter-div2-content1 ' /> Angry
              Birds
            </div>

            <div>
              <input type='checkbox' className='filter-div2-content1 ' /> Bad
              Pigges
            </div>
            <div>
              <input
                type='checkbox'
                className='filter-div2-content1 '
                style={{ marginLeft: "-3.8rem" }}
              />{" "}
              Games
            </div>
          </div>
          <div>
            <input
              type='checkbox'
              className='filter-div2-content1 '
              style={{ marginLeft: "-4.5rem" }}
            />{" "}
            Tshirt
          </div> */}
        </div>
      ) : null}
    </div>
  );
};

export default FilterSIdebar;
