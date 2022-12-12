/** @format */

import React, { useState } from "react";
import "./FilterSidebar.css";
import { RiFilterFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const FilterSIdebar = () => {
  const [show, setShow] = useState(false);

  const [value, setValue] = useState(0);

  console.log(value);
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
            <p>Range Filter</p>

            <input
              type='range'
              min='1'
              max='4000'
              value={value}
              className='range-filter'
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>{value}</div>
          <div>
            <div className='filter-div2 '>Sort By Price</div>
            <div className='filter-div2-content '>
              <div>
                <input type='checkbox' className='filter-div2-content1 ' /> 0 -
                1000
              </div>
              <div>
                <input type='checkbox' style={{ marginLeft: "-0.3rem" }} /> 1000
                - 2000
              </div>
              <div>
                <input type='checkbox' /> 2000 - 3000
              </div>
              <div>
                <input type='checkbox' /> 3000 - 4000
              </div>
            </div>
          </div>

          <div className='filter-div2 '>Sort By Category</div>
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
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterSIdebar;
