/** @format */

import React, { useEffect, useState } from "react";
import { useFilter } from "../../Context/FilterContext";
import Pagination from "../Pagination/Pagination";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";
import "./Card.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const [array, setArray] = useState(
    JSON.parse(localStorage.getItem("cartObj") || "[]")
  );

  const [WishlistArray, setWishlistArray] = useState(
    JSON.parse(localStorage.getItem("wishlistObj") || "[]")
  );

  // console.log(array);

  const { state } = useFilter();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.product.slice(indexOfFirstPost, indexOfLastPost);

  const notify = () => toast.dark("Added To Cart");

  const notify1 = () => toast.dark("Added To Wishlist");

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cartObj = JSON.stringify(array);

    localStorage.setItem("cartObj", cartObj);

    const wishlistObj = JSON.stringify(WishlistArray);

    localStorage.setItem("wishlistObj", wishlistObj);
  }, [array, WishlistArray]);

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
                  <button
                    className='btn-card'
                    onClick={() => {
                      setTimeout(() => {
                        setArray([
                          ...array,
                          {
                            id: uuidv4(),
                            name: item.name,
                            img: item.imgUrl,
                            discountedPrice: item.discountedPrice,
                          },
                        ]);
                      }, 1000);
                      notify();
                    }}>
                    Add To Cart
                  </button>
                  <button
                    className='btn-card'
                    onClick={() => {
                      setTimeout(() => {
                        setWishlistArray([
                          ...WishlistArray,
                          {
                            id: uuidv4(),
                            name: item.name,
                            img: item.imgUrl,
                            discountedPrice: item.discountedPrice,
                          },
                        ]);
                      }, 1000);
                      notify1();
                    }}>
                    Add To Wishlist
                  </button>
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

      <ToastContainer />
    </div>
  );
};

export default Card;
