/** @format */

import React, { useState } from "react";
import { useFilter } from "../../Context/FilterContext";
import Pagination from "../Pagination/Pagination";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";
import "./Card.css";

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const { state } = useFilter();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.product.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  if (loading) {
    return <SkeletonLoading />;
  }

  return (
    <div className='card-flex'>
      {loading ? <SkeletonLoading /> : null}
      {currentPosts.map((item, i) => {
        return (
          <div className='' key={i}>
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
                  <button className='btn-card'>Add To Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {state.product.length > 7 ? (
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={state.product.length}
          paginate={paginate}
        />
      ) : null}
    </div>
  );
};

export default Card;
