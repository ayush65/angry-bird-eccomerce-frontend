/** @format */

import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishlistCard = () => {
  const [array, setArray] = useState([]);
  const [updatedArray, setUpdatedArray] = useState([]);

  const [Cartarray, setCartArray] = useState(
    JSON.parse(localStorage.getItem("cartObj") || "[]")
  );

  const notify = () => toast.dark("Moved To Cart");

  const notify1 = () => toast.dark("Removed from Wishlist");

  useEffect(() => {
    const cartObj = JSON.stringify(Cartarray);

    localStorage.setItem("cartObj", cartObj);

    const str = localStorage.getItem("wishlistObj");

    const parsedObj = JSON.parse(str);

    const updatedItems = parsedObj.filter((item) => item.id !== array.id);
    setUpdatedArray(updatedItems);
    localStorage.setItem("wishlistObj", JSON.stringify(updatedItems));
    console.log(JSON.parse(localStorage.getItem("wishlistObj")));
  }, [array, Cartarray]);
  return (
    <>
      <ToastContainer />
      <h1 style={{ color: "white" }}>
        Wishlist :- {updatedArray.length} Items
      </h1>

      <div className='wishlist'>
        {updatedArray.map((item) => {
          return (
            <div key={item.id} className='wishlist-products-card'>
              <img src={item.img} alt='item-img' className='item-cart-img' />
              <h1>{item.name}</h1>
              <p>Price :- Rs {item.discountedPrice}</p>
              <div>
                <button
                  className='btn-card'
                  onClick={() => {
                    setArray(item);
                    setTimeout(() => {
                      setCartArray([
                        ...Cartarray,
                        {
                          id: item.id,
                          name: item.name,
                          img: item.img,
                          discountedPrice: item.discountedPrice,
                        },
                      ]);
                    }, 100);
                    notify();
                  }}>
                  Move to Cart
                </button>
                <button
                  className='btn-card'
                  onClick={() => {
                    setArray(item);
                    notify1();
                  }}>
                  Remove from Wishlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WishlistCard;
