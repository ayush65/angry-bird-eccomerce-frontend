/** @format */

import React, { useState } from "react";
import "./SkeletonLoading.css";
import { Dots } from "loading-animations-react";

const SkeletonLoading = () => {
  const [loader, setLoader] = useState(true);

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
