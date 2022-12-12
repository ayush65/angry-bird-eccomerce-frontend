/** @format */

import React from "react";
import "./SkeletonLoading.css";
import { Dots } from "loading-animations-react";

const SkeletonLoading = () => {
  return (
    <div className='SkeletonLoading'>
      {" "}
      <div className='SkeletonLoading-content'>
        <Dots
          dotColors={[
            "#9b2226",
            "#9b2226",
            "#9b2226",
            "#9b2226",
            "#9b2226",
            "#9b2226",
          ]}
        />
      </div>
    </div>
  );
};

export default SkeletonLoading;
