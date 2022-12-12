/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";
import "./Card.css";

const Card = () => {
  const [array, setArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    const initFetch = async () => {
      const options = {
        method: "GET",
        url: "https://angry-bird-eccomerce-backend.vercel.app/api/v1/products",
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setArray(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    initFetch();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = array.slice(indexOfFirstPost, indexOfLastPost);

  console.log(currentPosts);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const [loading, setLoading] = useState(true);

  // if (loading) {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }

  // if (loading) {
  //   return <SkeletonLoading />;
  // }

  return (
    <div className='card-flex'>
      {currentPosts.map((item, i) => {
        return (
          <div>
            <div>
              <div className='card'>
                <div className='card__imageContainer'>
                  <img src={item.imgUrl} alt='' className='card__image' />
                </div>
                <div className='card__contentContainer'>
                  <h2>{item.name}</h2>

                  <div className='card__price'>
                    <div> Rs {item.discountedPrice}</div>
                    <div className='card-price-container'>
                      <div className='card-ActualPrice'>
                        Rs{item.ActualPrice}
                      </div>
                      <div className='line-cut'></div>
                    </div>
                  </div>
                  <button className='btn-card'>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={array.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Card;
