/** @format */

import React from "react";
import "./SkeletonLoading.css";

const SkeletonLoading = () => {
  return (
    <div className='SkeletonLoading'>
      {" "}
      <div className='SkeletonLoading-content'>
        {" "}
        <img
          src='https://www.photofunky.net/output/image/f/3/0/5/f3056d/photofunky.gif'
          alt=''
          className='app-img'
        />
        <p>Loading .......</p>
      </div>
    </div>
  );
};

export default SkeletonLoading;
